'use client';

import { Toaster as HotToaster } from "react-hot-toast";

export default function Toaster() {
  return (
    <HotToaster
      position="bottom-right" // Set the position to bottom-right
      toastOptions={{
        duration: 4000, // Set the default duration for toasts
        style: {
          background: '#333', // Background color for the toast
          color: '#fff', // Text color
          padding: '16px', // Padding for a clean look
          borderRadius: '8px', // Rounded corners
          animation: 'slide-in-right 0.5s ease',
        },
        success: {
          iconTheme: {
            primary: 'green',
            secondary: 'white',
          },
        },
      }}
      containerStyle={{
        bottom: 20, // Customize position margin
        right: 20,
      }}
    />
  )
}
