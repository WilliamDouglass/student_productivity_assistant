module.exports = {
    content: [
      './src/**/*.{html,js}', // Update this path to match your project structure
    ],
    theme: {
      extend: {
        spacing: {
          '5vh': '5vh',      // Custom spacing for icons or elements
          '10vh': '10vh',    // For the navbar height
          '400px': '400px',  // For chat container height
          '600px': '600px',  // For max-width on containers
        },
        colors: {
          'blue-100': '#ebf8ff', // Light blue for user messages
          'gray-100': '#f7fafc', // Light gray for bot messages
          'gray-300': '#e2e8f0', // Border gray color for chat box
          'gray-500': '#a0aec0', // Navbar background color
        },
        boxShadow: {
          'lg': '0 2px 10px rgba(0, 0, 0, 0.1)', // Subtle shadow for the chat box
        },
        borderRadius: {
          'full': '9999px', // For fully rounded elements
          'lg': '10px',     // For messages
        },
      },
    },
    plugins: [],
  }
  