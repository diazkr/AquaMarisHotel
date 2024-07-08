'use client';

import React, { useState } from 'react';
import { TextField, IconButton, Box, Tooltip } from '@mui/material';
import { FiCopy } from 'react-icons/fi';

interface CopyToClipboardProps {
  textToCopy: string;
}

const CopyToClipboard: React.FC<CopyToClipboardProps> = ({ textToCopy }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setTooltipOpen(true);
      setTimeout(() => {
        setTooltipOpen(false);
      }, 2000); // Tooltip stays visible for 2 seconds
    } catch (err) {
      console.error('Error al copiar el texto:', err);
    }
  };

  return (
    <Box display="flex" alignItems="center" border={1} borderColor="grey.300" borderRadius={1} p={1}>
      <TextField
        value={textToCopy}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        fullWidth
      />
      <Tooltip
        title="Contenido copiado"
        open={tooltipOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
      >
        <IconButton onClick={handleCopy} edge="end">
          <FiCopy />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default CopyToClipboard;
