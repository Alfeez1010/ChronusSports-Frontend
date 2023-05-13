export interface Player {
  id: number;
  name: string;
  player_record: string;
  specialization: string;
  desc: string;
  market_price: number;
  quantity: number;
}
export interface PlayerCardProps {
  player:Player,
  addToCart: (player: any) => void;
  isPlayerInCart: (player: any) => boolean;
}
export interface PlayersProps {
  onAddToCart: (player: Player, cart: Player[]) => void; // Update the onAddToCart function signature to accept cartPlayers as a parameter
}
export interface SelectedPrice {
  min: number;
  max: number;
}

export interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginateFront: () => void;
  paginateBack: () => void;
  currentPage: number;
  jumpToPage: (pageNumber: number) => void; // add jumpToPage to props
}
export interface HeaderProps {
  cartList: Player[];
}
export interface CartProps {
  cartList: Player[];
  closeModal: () => void;
}
export interface Props {
  min: number;
  max: number;
  onPriceChange: ({ min, max }: { min: number; max: number }) => void;
}
