import { Box, Textarea } from '@mantine/core';

export function ChatInput(_params: { name?: string }) {
	return (
		<Box
			p="sm"
			style={{
				backgroundColor: 'lightgray',
				position: 'fixed',
				bottom: 0,
				left: 'var(--app-shell-navbar-offset, 0px)',
				right: 0,
				zIndex: 100, // Ensures it stays on top of scrolling content
			}}
		>
			<Textarea
				placeholder="Type your message..."
				autosize
				minRows={1}
				maxRows={4}
			/>
		</Box>
	);
}

