import type { Tool, BlogPost } from "@/modules/shared/types";

export interface ToolCardProps {
  tool: Tool;
  index: number;
}

export interface BlogCardProps {
  post: BlogPost;
  index: number;
}
