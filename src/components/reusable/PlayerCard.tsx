import Image from 'next/image';
import { PlayerCardProps } from '@/types/marketPlace';
import { useRouter } from 'next/router';

const PlayerCard: React.FC<PlayerCardProps> = ({
  player,
  addToCart,
  isPlayerInCart,
}) => {
  const router = useRouter();

  // const handleCardClick = (id:number) => {
  //   router.push(`/playerdetails/${id}`);
  // };
  return (
    <div className="card-mkt-place mx-2 mb-2 w-full sm:w-[46%] md:w-[46%] lg:w-[31%] xl:w-[23%] ">
      <div className="sombra-imagem">
        <Image
          src="/assets/players/jogador.png"
          className="img-card-mkt"
          width={302}
          height={279}
          alt=""
        />
      </div>
      <div className="info-card-mkt">
        <div className="textos-card-mkt">
          <h3>{player.name}</h3>
          <h4>{player.player_record}</h4>
          <span>{player.specialization}</span>
        </div>
        <div className="numeros-info-card">
          <div className="qtd-info-card">
            <p>Qtd: 120/250</p>
          </div>
          <div className="preco-info-card">
            <p>10% ^</p>
            <h4>R$ {player.market_price}</h4>
          </div>
        </div>
      </div>
      <div className="btn-mkt gap-2 mt-3">
        <button>{isPlayerInCart(player) ? 'COMPRAR' : 'VER PRODUTO'}</button>
        <button className="gap-1" onClick={() => addToCart(player)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          {isPlayerInCart(player) ? 'REMOVER' : 'ADICIONAR'}
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
