import { MainLayout } from "../../jd-react-kit/components/MainLayout";
import { ChatInput } from "./components/ChatInput";

export default function App() {

  return (
    <MainLayout
      title="Ask Prabhupada"
      body=<ChatInput name={""} />
    />
  );
}
