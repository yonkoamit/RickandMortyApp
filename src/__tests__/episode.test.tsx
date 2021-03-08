import React from 'react';
import {render,screen} from '@testing-library/react';
import {MockedProvider} from '@apollo/client/testing'
import {getEpisodes} from '../Hooks/useEpisodeQuery';
import { BrowserRouter } from 'react-router-dom';
import Episodes from '../components/Pages/Episodes/Episodes';

test("Rendering Episode List Page",async ()=>{
  const episodemock=[
    {
      request:{
        query:getEpisodes(1,"")
      },
      result:{
        data:{
          episodes:{
            info:{
              pages:"1",
              next:"null",
              prev:"null"
            },
            results:[
              {
                id:"1",
                name:"Abc",
                air_date:"9 dec",
                episode:"S01E01",
                characters:[{
                  id:"1"
                },
                {
                  id:"2"
                }
              ]
              },
              {
                id:"2",
                name:"bac",
                air_date:"10 dec",
                episode:"S01E02",
                characters:[{
                  id:"1"
                },
                {
                  id:"2"
                }
              ]
              }
            ]
          }
        }
      }
    }
  ];
  render(
    <BrowserRouter>
      <MockedProvider mocks={episodemock} addTypename={false}>
        <Episodes/>
      </MockedProvider>
    </BrowserRouter>
  )
  // const episodename=await screen.findAllByRole('img',{name:/episode image/i});
  const episodename=await screen.findAllByAltText(/episode image/i);
  // console.log(episodename);
  expect(episodename).toHaveLength(2);
  // screen.debug();


})