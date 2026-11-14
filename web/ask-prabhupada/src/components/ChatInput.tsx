import { ActionIcon, Box, Textarea } from '@mantine/core';
import { IconSend2 } from '@tabler/icons-react';

export function ChatInput(_params: { name?: string }) {
	return (
		<Box
      p="xs"
      style={{
				position: 'fixed',
				bottom: 0,
				left: 'var(--app-shell-navbar-offset, 0px)',
				right: 0,
				zIndex: 100, // Ensures it stays on top of scrolling content
			}}
		>
			<Textarea
        placeholder="Type your query..."
				autosize
				minRows={1}
				maxRows={4}
				rightSectionPointerEvents="all"
				rightSection={
					<ActionIcon variant="transparent" aria-label="Send">
						<IconSend2 size={20} stroke={1.5} />
					</ActionIcon>
				}
			/>
		</Box>
	);
}

