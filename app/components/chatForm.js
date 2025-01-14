'use client';

import { useState, setState } from 'react';
import Form from 'next/form';

export default function ChatForm() {
  
  return (
    <div>
      <Form action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </Form>
    </div>
  )
}