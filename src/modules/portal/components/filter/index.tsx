import Slider from '@/components/slider';
import Head from 'next/head';
import React, { useState } from 'react';
import { SelectedPrice } from '@/types/marketPlace';

export default function Filter(): JSX.Element {
  const [subcategories, setSubcategories] = useState<boolean>(false);
  const [suboptions, setSuboptions] = useState<boolean>(false);
  const [selectedPrice, setSelectedPrice] = useState<SelectedPrice>({
    min: 0,
    max: 10000,
  });

  const [esports, setEsports] = useState({
    esportes: false,
    artesMarciais: false,
    Futebol: false,
    Natação: false,
    Brasileiro: false,
    Baiano: false,
  });
  const [região, setRegiao] = useState({
    regiaos: false,
    america: false,
    europa: false,
  });
  const [others, setOthers] = useState({
    genero: false,
    status: false,
    tipos: false,
    Coleções: false,
    Olímpicos: false,
    Mundiais: false,
    price: false,
  });

  const handlePriceChange = (price: SelectedPrice) => {
    setSelectedPrice(price);
  };
  //   const handleToggleSubcategories = () => {
  //     setSubcategories(!subcategories);
  //   };

  //   const handleToggleSuboptions = () => {
  //     setSuboptions(!suboptions);
  //   };
  const handleClearFilters = () => {
    // setSubcategories(false);
    // setSuboptions(false);
    setEsports({
      esportes: false,
      artesMarciais: false,
      Futebol: false,
      Natação: false,
      Brasileiro: false,
      Baiano: false,
    });
    setOthers({
      genero: false,
      status: false,
      tipos: false,
      Coleções: false,
      Olímpicos: false,
      Mundiais: false,
      price: false,
    });
    setRegiao({ regiaos: false, america: false, europa: false });
  };
  return (
    <>
      <div className="main-mkt-place  ml-20">
        <div className="sidebar-mktplace">
          <h2 className="font-outfit">FILTROS</h2>
          <div className="conteudo-mktplace-sidebar">
            <div className="sidebar">
              <ul className="categorias">
                <li>
                  <a
                    href="#"
                    className="categoria-pai"
                    // onClick={handleToggleSuboptions}
                  >
                    <span className="toggle-icon">
                      {suboptions ? '-' : '+'}
                    </span>
                    Blue Chipes
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="categoria-pai"
                    onClick={() => {
                      setOthers((prevOthers) => ({
                        ...prevOthers,
                        price: !prevOthers.price,
                      }));
                    }}
                  >
                    <span className="toggle-icon">
                      {others.price ? '-' : '+'}
                    </span>
                    Preço
                  </a>
                </li>
                {others.price ? (
                  <li>
                    <Slider
                      min={0}
                      max={10000}
                      onPriceChange={handlePriceChange}
                    />
                  </li>
                ) : (
                  ''
                )}

                {/* <div className="flex justify-between">
                  <span>{selectedPrice.min}€</span>
                  <span>{selectedPrice.max}€</span>
                </div> */}
                <li>
                  <a
                    href="#"
                    className="categoria-pai"
                    onClick={() => {
                      setEsports((prevEsports) => ({
                        ...prevEsports,
                        esportes: !prevEsports.esportes,
                      }));
                    }}
                  >
                    <span className="toggle-icon">
                      {esports.esportes ? '-' : '+'}
                    </span>
                    Esportes
                  </a>
                  <ul
                    className={`subcategorias ${
                      esports.esportes ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <a href="#">
                        <span className="toggle-icon">
                          {esports.artesMarciais ? '-' : '+'}
                        </span>
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div
                          onClick={() => {
                            setEsports((prevEsports) => ({
                              ...prevEsports,
                              artesMarciais: !prevEsports.artesMarciais,
                            }));
                          }}
                        >
                          Artes Marciais
                        </div>
                      </a>
                      <ul
                        className={`sub-opcoes ${
                          esports.artesMarciais ? 'block' : 'hidden'
                        }`}
                      >
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Jiu-Jitsu
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Judo
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            MMA
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div>Basquete</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {/* <span className="toggle-icon">
                          {subcategories ? '-' : '+'}
                        </span>  */}
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div> Boxe</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="toggle-icon">
                          {esports.Futebol ? '-' : '+'}
                        </span>
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div
                          onClick={() => {
                            setEsports((prevEsports) => ({
                              ...prevEsports,
                              Futebol: !prevEsports.Futebol,
                            }));
                          }}
                        >
                          Futebol
                        </div>
                      </a>
                      <ul
                        className={`sub-opcoes ${
                          esports.Futebol ? 'block' : 'hidden'
                        }`}
                      >
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Copa do Mundo
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Copa América
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Libertadores
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Copa do Brasil
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <span className="toggle-icon">
                              {esports.Brasileiro ? '-' : '+'}
                            </span>
                            <input
                              type="checkbox"
                              className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <div
                              onClick={() => {
                                setEsports((prevEsports) => ({
                                  ...prevEsports,
                                  Brasileiro: !prevEsports.Brasileiro,
                                }));
                              }}
                            >
                              Campeonato Brasileiro
                            </div>
                          </a>
                          <ul
                            className={`sub-opcoes ${
                              esports.Brasileiro ? 'block' : 'hidden'
                            }`}
                          >
                            <li>
                              <a href="#">
                                <div className="flex h-6 items-center">
                                  <input
                                    type="checkbox"
                                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                Serie A
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <div className="flex h-6 items-center">
                                  <input
                                    type="checkbox"
                                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                Serie B
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <span className="toggle-icon">
                              {esports.Baiano ? '-' : '+'}
                            </span>
                            <input
                              type="checkbox"
                              className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                            />
                            <div
                              onClick={() => {
                                setEsports((prevEsports) => ({
                                  ...prevEsports,
                                  Baiano: !prevEsports.Baiano,
                                }));
                              }}
                            >
                              Campeonato Baiano
                            </div>
                          </a>
                          <ul
                            className={`sub-opcoes ${
                              esports.Baiano ? 'block' : 'hidden'
                            }`}
                          >
                            <li>
                              <a href="#">
                                <div className="flex h-6 items-center">
                                  <input
                                    type="checkbox"
                                    className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                  />
                                </div>
                                Serie A
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Copa do Nordeste
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Champions League
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            La Liga A1
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div> Futsal</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="toggle-icon">
                          {esports.Natação ? '-' : '+'}
                        </span>
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div
                          onClick={() => {
                            setEsports((prevEsports) => ({
                              ...prevEsports,
                              Natação: !prevEsports.Natação,
                            }));
                          }}
                        >
                          Natação
                        </div>
                      </a>
                      <ul
                        className={`sub-opcoes ${
                          esports.Natação ? 'block' : 'hidden'
                        }`}
                      >
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Estilo Costas
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Estilo Livre
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div> Surf</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div> Tênis</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div> Vôlei</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="categoria-pai"
                    onClick={() => {
                      setOthers((prevOthers) => ({
                        ...prevOthers,
                        genero: !prevOthers.genero,
                      }));
                    }}
                  >
                    <span className="toggle-icon">
                      {others.genero ? '-' : '+'}
                    </span>
                    Gênero
                  </a>
                  <ul
                    className={`subcategorias ${
                      others.genero ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div> Feminino</div>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <div>Masculino</div>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="categoria-pai"
                    onClick={() => {
                      setOthers((prevOthers) => ({
                        ...prevOthers,
                        status: !prevOthers.status,
                      }));
                    }}
                  >
                    <span className="toggle-icon">
                      {others.status ? '-' : '+'}
                    </span>
                    Status
                  </a>
                  <ul
                    className={`subcategorias ${
                      others.status ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        Ativo
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        Aposentado
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="categoria-pai"
                    onClick={() => {
                      setRegiao((prevRegiao) => ({
                        ...prevRegiao,
                        regiaos: !prevRegiao.regiaos,
                      }));
                    }}
                  >
                    <span className="toggle-icon">
                      {região.regiaos ? '-' : '+'}
                    </span>
                    Região
                  </a>
                  <ul
                    className={`subcategorias ${
                      região.regiaos ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        África
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          setRegiao((prevRegiao) => ({
                            ...prevRegiao,
                            america: !prevRegiao.america,
                          }));
                        }}
                      >
                        <span className="toggle-icon">
                          {região.america ? '-' : '+'}
                        </span>
                        América
                      </a>
                      <ul
                        className={`sub-opcoes ${
                          região.america ? 'block' : 'hidden'
                        }`}
                      >
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Brasil
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        Asia
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        onClick={() => {
                          setRegiao((prevRegiao) => ({
                            ...prevRegiao,
                            europa: !prevRegiao.europa,
                          }));
                        }}
                      >
                        <span className="toggle-icon">
                          {região.europa ? '-' : '+'}
                        </span>
                        Europa
                      </a>
                      <ul
                        className={`sub-opcoes ${
                          região.europa ? 'block' : 'hidden'
                        }`}
                      >
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Portugal
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Espanha
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <div className="flex h-6 items-center">
                              <input
                                type="checkbox"
                                className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            Itália
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        Oceania
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <input
                          type="checkbox"
                          className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        Oriente Médio
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="categoria-pai"
                    onClick={() => {
                      setOthers((prevOtsetOthers) => ({
                        ...prevOtsetOthers,
                        tipos: !prevOtsetOthers.tipos,
                      }));
                    }}
                  >
                    <span className="toggle-icon">
                      {others.tipos ? '-' : '+'}
                    </span>
                    Tipos
                  </a>
                  <ul
                    className={`subcategorias ${
                      others.tipos ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Comuns
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Especiais
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Raros
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Super Raros
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Hall of Fame
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Black Diamonds
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Lendários
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Sociais
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Itália
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a
                    href="#"
                    className="categoria-pai"
                    onClick={() => {
                      setOthers((prevOthers) => ({
                        ...prevOthers,
                        Coleções: !prevOthers.Coleções,
                      }));
                    }}
                  >
                    <span className="toggle-icon">
                      {others.Coleções ? '-' : '+'}
                    </span>
                    Coleções
                  </a>
                  <ul
                    className={`subcategorias ${
                      others.Coleções ? 'block' : 'hidden'
                    }`}
                  >
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Álbuns
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Packs
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <div className="flex h-6 items-center">
                          <input
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        Collabs
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="categoria-pai">
                    <span className="toggle-icon">
                      {suboptions ? '-' : '+'}
                    </span>
                    Olímpicos
                  </a>
                </li>
                <li>
                  <a href="#" className="categoria-pai">
                    <span className="toggle-icon">
                      {suboptions ? '-' : '+'}
                    </span>
                    Mundiais
                  </a>
                  <ul
                    className={`subcategorias ${
                      suboptions ? 'block' : 'hidden'
                    }`}
                  ></ul>
                </li>
              </ul>
            </div>
          </div>
          <button className="btn-limpar-filtro" onClick={handleClearFilters}>
            Limpar filtros
          </button>
        </div>
      </div>
    </>
  );
}


