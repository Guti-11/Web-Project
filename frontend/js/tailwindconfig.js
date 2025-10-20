tailwind.config = {
  theme: {
    extend: {
      fontFamily: { inter: ['Inter', 'ui-sans-serif', 'system-ui'] },
      colors: {
        brand: {
          50:  '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',   // core purple
          600: '#9333ea',   // hover (bg-purple-600)
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
        }
      },
      boxShadow: {
        // softened to purple
        soft: '0 10px 30px -12px rgba(147, 51, 234, 0.35)',
      },
      backgroundImage: {
        // replaces red-glow usage in HTML with purple-glow
        'purple-glow': 'radial-gradient(1200px 600px at 10% -10%, rgba(147, 51, 234, 0.12), transparent 60%), radial-gradient(800px 500px at 110% 10%, rgba(147, 51, 234, 0.10), transparent 60%)',
      }
    }
  }
}
