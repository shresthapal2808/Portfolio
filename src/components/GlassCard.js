// src/components/GlassCard.js

import React from 'react';
import { Card } from 'react-bootstrap';
import './GlassCard.css';

function GlassCard({ children }) {
  return (
    <Card className="glass-card shadow-lg h-100">
      {children}
    </Card>
  );
}

export default GlassCard;
