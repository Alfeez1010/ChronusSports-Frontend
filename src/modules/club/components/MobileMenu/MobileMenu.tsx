import { useState } from 'react';
import Image from 'next/image';

import Submit from './components/buttons/Submit/Submit';
import FiltersMobile from './components/FiltersMobile/FiltersMobile';

import styles from './MobileMenu.module.css';

import { ranking } from '@/utils/ranking';
import { modalidade } from '@/utils/modalidade';
import paisesComId from '@/utils/country';




interface Props {
  onClose: () => void;
  onFilter?: (filters: { ranking: string; modalidade: string; paises: string } | null) => void;
}

type Option = {
  id: number;
  name: string;
  unavailable: boolean;
}

const MobileMenu: React.FC<Props> = ({onFilter, onClose}) => {
  const [selectedRanking, setSelectedRanking] = useState<Option>({ id: 0, name: 'Ranking', unavailable: true });
  const [selectedModalidade, setSelectedModalidade] = useState<Option>({ id: 0, name: 'Modalidade', unavailable: true });
  const [selectedPaises, setSelectedPaises] = useState<Option>({ id: 0, name: "País", unavailable: true });
 
  function handleFilter() {
    const filteredRanking = selectedRanking.name === "Todos" || selectedRanking.name === 'Ranking' ? "" : selectedRanking.name;
    const filteredModalidade = selectedModalidade.name === "Todos" || selectedModalidade.name === 'Modalidade' ? "" : selectedModalidade.name;
    const filteredPaises = selectedPaises.name === "Todos" || selectedPaises.name === 'País' ? "" : selectedPaises.name;
    const filters = { ranking: filteredRanking, modalidade: filteredModalidade, paises: filteredPaises };
    if (onFilter) {
      onFilter(filters);
    }
    onClose();
  }

  return (
    <div className={styles.mobileMenu}>
      <button className={styles.closeButton} onClick={onClose}>
        <Image src="/assets/images/closeIcon.svg" width={18} height={18} alt='CloseIcon'></Image>
      </button>
      <nav className={styles.nav}>
        <ul className={styles.menu}>

          <li className={styles.menuItem}>
            <FiltersMobile selectedValue={selectedRanking} onChange={setSelectedRanking} options={ranking} label='Ranking' ></FiltersMobile>
          </li>

          <li className={styles.menuItem}>
            <FiltersMobile selectedValue={selectedModalidade} onChange={setSelectedModalidade} options={modalidade} label='Modalidade' ></FiltersMobile>
          </li>
          
          <li className={styles.menuItem}>
            <FiltersMobile selectedValue={selectedPaises} onChange={setSelectedPaises} options={paisesComId} label='País' ></FiltersMobile>
          </li>

          <li className={styles.button}>
            <Submit onClick={handleFilter}></Submit>  
          </li>
          
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
