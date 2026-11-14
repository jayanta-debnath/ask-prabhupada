import { Box } from '@mantine/core';

export function ChatInput(params: {name: string}) {
	return (
		<Box style={{
        height: 50,
        backgroundColor: 'lightgray',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 100, // Ensures it stays on top of scrolling content
      }}>
    </Box>
	);
}

