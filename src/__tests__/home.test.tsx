import {ALL_EPISODES_AND_CHARACTERS} from '../Hooks/useHomeQuery';
import React from 'react';
import {render,screen} from '@testing-library/react';
import {MockedProvider} from '@apollo/client/testing'
import Home from '../components/Pages/Home/Home';

import { BrowserRouter } from 'react-router-dom';
import { debug } from 'console';

test("renders homepage",async ()=>{
  const homeMock = [
    {
    request: {
      query: ALL_EPISODES_AND_CHARACTERS,
    },
    result: {
      data: { 
          episodes: {
            results: [
              {
                id: "1",
                name: "Pilo",
                air_date: "December 2, 2013",
                episode: "S01E01",
                characters: [
                  {
                    id: "1"
                  },
                  {
                    id: "2"
                  }]
              },
              {
                id: "2",
                name: "War",
                air_date: "December 4, 2013",
                episode: "S01E02",
                characters: [
                  {
                    id: "1"
                  },
                  {
                    id: "2"
                  }]
              },
            ]
          },
          characters:{
            results:[
              {
                id: "1",
                name: "Rick Sanchez",
                species: "Human",
                gender: "Male",
                image: "1.jpeg"
              },
              {
                id: "2",
                name: "Morty Smith",
                species: "Human",
                gender: "Male",
                image: "2.jpeg"
              }
            ]

          }
        }
      },
    }
  ];
  render(
    <BrowserRouter>
      <MockedProvider mocks={homeMock} addTypename={false}>
        <Home/>
      </MockedProvider>
    </BrowserRouter>
  );
  const name=await screen.findByText(/Pilo/);
  expect(name).toBeInTheDocument();
  // await new Promise(resolve => setTimeout(resolve, 4000));
  const numberofimgs=screen.findByAltText(/episode image/);
  console.log('hey this is ',numberofimgs);
  // screen.debug();
  // expect(numberofimgs).toHaveLength(5);
  
  
})