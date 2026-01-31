import { cn } from "@/lib/utils";

type Message = {
  role: "user" | "assistant";
  content: string;
};

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={cn(
        "flex w-full",
        isAssistant ? "justify-start" : "justify-end"
      )}
    >
      <div
        className={cn(
          "max-w-[85%] md:max-w-[75%] px-5 py-4",
          isAssistant
            ? "bg-secondary text-foreground"
            : "bg-primary text-primary-foreground"
        )}
      >
        <p className="body-regular whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
