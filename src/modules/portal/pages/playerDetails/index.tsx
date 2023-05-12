import Header from '@/components/Header';
import React from 'react';
import Footer from '../../components/footer';
import BannerPage from '@/components/details/BannerPage';
import { Promotion } from '@/components/details/promotion';
import CardSections from '@/components/cardSections';

function PlayerDetails() {
  return (
    <div className="bg-[#0D0035]">
      <Header />
      <BannerPage />
      <Promotion />
      <CardSections />
      <Footer />
    </div>
  );
}

export default PlayerDetails;
