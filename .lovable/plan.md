

# Floating Chatbot Widget Implementation

## Overview
Transform the current embedded chatbot into a floating widget available site-wide, remove the Contact navigation item and /contact route, and remove the existing "Book a Free Call" button since booking will now happen through the chat widget.

## Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `src/components/ChatWidget.tsx` | Create | New floating widget wrapper with open/close toggle |
| `src/components/Layout.tsx` | Modify | Add ChatWidget, remove BookCallButton |
| `src/components/Navbar.tsx` | Modify | Remove "Contact" from navigation items |
| `src/App.tsx` | Modify | Remove /contact route |
| `src/pages/Contact.tsx` | Delete | No longer needed |

## User Experience

1. **Widget Appearance**: Small circular chat icon in bottom-right corner (replacing the Book a Call button)
2. **Click to Open**: Expands into the full chat interface
3. **Click to Close**: Collapses back to icon
4. **Available Everywhere**: Widget renders in Layout component, visible on all pages
5. **Smooth Animations**: Framer Motion for open/close transitions

## Component Design

### ChatWidget (New)
```
+---------------------------+
|  [minimized state]        |
|      💬  (icon button)    |
+---------------------------+

+---------------------------+
|  [expanded state]         |
|  +---------------------+  |
|  | Chat Header      X  |  |
|  +---------------------+  |
|  | Messages Area       |  |
|  |                     |  |
|  +---------------------+  |
|  | Input + Send        |  |
|  +---------------------+  |
+---------------------------+
```

- Positioned `fixed bottom-8 right-8`
- Icon: `MessageCircle` from lucide-react
- Close button in header when expanded
- Reuses existing `ChatBot` internals (messages, streaming, input)
- Mobile: Full-width drawer or slightly smaller widget

### Layout Changes
- Remove `<BookCallButton variant="fixed" />` 
- Add `<ChatWidget />` in its place

### Navigation Changes
Remove "Contact" from `navItems` array - users access the chat via the floating widget instead.

### Route Changes
Remove the `/contact` route from App.tsx since that page is no longer needed.

## Technical Details

### Widget State
```typescript
const [isOpen, setIsOpen] = useState(false);
```

### Animation
- Icon button: Subtle pulse animation to draw attention
- Expand: Scale + fade in from bottom-right origin
- Collapse: Reverse animation

### Styling
- Widget container: `bg-background border border-border shadow-xl`
- Size when open: `w-[380px] h-[500px]` on desktop, responsive on mobile
- Icon button: `bg-primary text-primary-foreground` with hover states
- Z-index: 50 (same as current BookCallButton)

### Mobile Considerations
- On mobile (`md:` breakpoint), widget may take more screen width
- Consider using vaul Drawer component for mobile (already installed)
- Or keep as a slightly larger floating panel

## Files to Delete
- `src/pages/Contact.tsx` - no longer needed since chat is now a floating widget

## Files Unchanged
- `src/components/ChatBot.tsx` - reused as-is inside the widget
- `src/components/ChatMessage.tsx` - reused as-is
- `src/components/ContactForm.tsx` - can be kept for potential future use or deleted
- `supabase/functions/contact-chat/index.ts` - edge function remains the same

