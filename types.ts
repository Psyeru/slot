
export enum SlotItem {
  CHERRY = '🍒',
  SEVEN = '7',
  STAR = '⭐',
  ROBOT = '🤖',
  GIFT = '🎁'
}

export interface Reward {
  symbol: SlotItem;
  title: string;
  description: string;
}

export interface HistoryItem {
  id: string;
  timestamp: Date;
  result: SlotItem[];
  reward: string;
}
