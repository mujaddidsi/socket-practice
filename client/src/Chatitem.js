import { Box } from '@mui/material';
import React from 'react';

function ChatItem({ message }) {
  const { username, body, time } = message;
  return (
    <Box
      sx={{
        border: 1,
        margin: 2,
        borderRadius: 1,
        textAlign: 'left',
        paddingBlock: 1,
        paddingInline: 2,
        backgroundColor: '#222426',
      }}
    >
      <p
        style={{
          fontWeight: 'bold',
          color: 'white',
          fontSize: '1.2em',
        }}
      >
        {username}
      </p>
      <p
        style={{
          marginBlock: 2,
          fontSize: '1.2em',
          color: 'white',
        }}
      >
        {body}
      </p>
      <p
        style={{
          fontSize: '0.8em',
          textAlign: 'right',
          color: '#cecece',
        }}
      >
        {time}
      </p>
    </Box>
  );
}

export default ChatItem;
