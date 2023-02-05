import React from 'react'
import Header from "../components/misc/Header";
import PetCareCards from '../components/petcare/PetCareCards';
import Article from '../components/petcare/Article';

const PetCare = () => {
  const articleCards = [
    {
      Date: "Jan 2 2022",
      Title: "7 Things You Should Not Do To A Cat",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae iure soluta commodi temporibus molestias laudantium unde! Veritatis, quod deleniti?"
    },
    {
      Date: "Feb 2 2022",
      Title: "Everything you need to buy before getting a cat!",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae iure soluta commodi temporibus molestias laudantium unde! Veritatis, quod deleniti?"
    },
    {
      Date: "Jan 8 2022",
      Title: "Cat Nutrition 101",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, beatae iure soluta commodi temporibus molestias laudantium unde! Veritatis, quod deleniti?"
    } 
  ]
  return (
    <div >
      <Header Title = "Cat Care" Description="a full guide for adopters about cats and how to care for them! if you wish to add more details to this page please email us" className="mb-12"/>
      {articleCards.map((article) => {
        return(
        <PetCareCards Title = {article.Title} Date = {article.Date} Description={article.Description} />
        );
      })}
      {/* <Article/> */}
      
    </div>
  )
}

export default PetCare
