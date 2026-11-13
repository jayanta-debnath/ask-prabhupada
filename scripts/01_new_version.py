import os
import re
import sys
import subprocess
import sys
from packaging.version import Version
import questionary

apps = {
    "web": {
        "path": "web/ask-prabhupada",
        "tech": "react"
    }
}
reltype = ""
hostingsite = ""
rootdir = ""

def create_or_switch_branch(new_version, cur_version):
    """Create a new branch """
    subprocess.check_output(["git", "checkout", cur_version])
    subprocess.check_output(["git", "pull"])
    subprocess.check_output(["git", "checkout", "-b", new_version, cur_version])
    print(f"Created and switched to new branch: {new_version}")

def get_value_from_file(filepath, search_string):
    ret = ""
    curdir = os.getcwd()
    os.chdir(rootdir)
    with open(filepath, 'r') as file:
        lines = file.readlines()
    for line in lines:
        if line.startswith("#"):
            continue
        if search_string in line:
            if '=' in line:
                _, value = line.split('=', 1)
                ret = value.strip()
                break
            elif ':' in line:
                key, value = line.split(':', 1)
                ret = value.strip()
                break
    os.chdir(curdir)
    return ret

def run_command(command):
    result = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    if result.returncode != 0:
        print(f"Command '{command}' failed with error:\n{result.stderr}")
        sys.exit(1)
    return result.stdout.strip()

def replace_string_in_file(filepath, search_string, replacement_string):
    curdir = os.getcwd()
    os.chdir(rootdir)
    with open(filepath, 'r') as file:
        lines = file.readlines()
    with open(filepath, 'w') as file:
        for line in lines:
            if search_string in line:
                file.write(line.replace(search_string, replacement_string))
            else:
                file.write(line)   
    os.chdir(curdir)

def set_value_in_file(filepath, search_string, value):
    curdir = os.getcwd()
    os.chdir(rootdir)
    with open(filepath, 'r') as file:
        lines = file.readlines()
    with open(filepath, 'w') as file:
        for line in lines:
            if search_string in line:
                if '=' in line:
                    key, _ = line.split('=', 1)
                    file.write(f'{key}={value}\n')
                elif ':' in line:
                    key, _ = line.split(':', 1)
                    file.write(f'{key}: {value}\n')
            else:
                file.write(line)   
    os.chdir(curdir)



def main():
    global rootdir
    rootdir = run_command('git rev-parse --show-toplevel')

    # select app to update
    app = questionary.select("Select app to update", choices=list(apps.keys())).ask()
    print(app)

    # Prompt for version type
    version_type = questionary.select("Enter version type", choices=["major", "minor", "bugfix"]).ask()
    
    # fetch the current version
    cur_version = get_value_from_file(f"{apps[app]['path']}/package.json", "version")
    cur_version = re.sub(r'[^0-9.]', '', cur_version)
    print(f"Current version: {cur_version}")

    # Increment the version number based on user selection
    if version_type == "major":
        major, minor, bugfix = cur_version.split(".")
        major = str(int(major) + 1)
        minor = "0"
        bugfix = "0"
    elif version_type == "minor":
        major, minor, bugfix = cur_version.split(".")
        minor = str(int(minor) + 1)
        bugfix = "0"
    elif version_type == "bugfix":
        major, minor, bugfix = cur_version.split(".")
        bugfix = str(int(bugfix) + 1)

    new_version = f"{major}.{minor}.{bugfix}"
    print(f"New version: {new_version}")

    # Checkout a new branch based on the latest branch
    try:
        create_or_switch_branch(f"{app}_{new_version}", "main")
        if apps[app]['tech'] == "react":
            replace_string_in_file(f'{apps[app]["path"]}/package.json', f'"version": "{cur_version}",', f'"version": "{new_version}",')
    except subprocess.CalledProcessError:
        print("ERROR: Failed to create new branch")
        sys.exit(1)
  
    # set database path as test
    # set_value_in_file('vkhpackages/lib/common/const.dart', "dbrootGaruda", " \"TEST/GARUDA_01\";")
    # set_value_in_file('vkhpackages/lib/common/const.dart', "dbrootSangeetSeva", " \"TEST/SANGEETSEVA_01\";")

    # Set the remote for the new branch and push
    try:
        subprocess.check_output(["git", "push", "-u", "origin", f"{app}_{new_version}"])
        print("Remote set for new branch")
    except subprocess.CalledProcessError:
        print("Failed to set remote for new branch")

    # reset time tracker
    os.unlink(".timetracker")
   
    print("all operations completed")
    input("Log the Start Date in Github milestone. (Re)Start time tracker and press Enter...")


if __name__ == "__main__":
    main()
