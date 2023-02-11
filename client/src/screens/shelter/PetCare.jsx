import React from 'react'
import Header from "../../components/common/misc/Header";
import PetCareCards from '../../components/shelter/petcare/PetCareCards';
import Article from './Article';
import Pagination from '../../components/shelter/petcare/Pagination';

const PetCare = () => {
  const articleCards = [
    {
      Date: "Jan 2 2022",
      Title: "A Guide To For First-Time Cat Owners",
      Description: "If you’re planning to become a new cat owner, you’re probably looking forward to the joy of having a new creature in your house. But if you’re a first-time cat owner, be prepared for a few surprises. Cats can be prone to what new owners might describe as “weird behavior” (think: leaping up on counters, running wild in the dead of the night or playing in boxes). But rest assured, these behaviors are typical."
    },
    {
      Date: "Feb 2 2022",
      Title: "Joys of Owning A Cat",
      Description: "Owning a cat can be an extremely rewarding relationship. A cat has the ability to both calm your nervous system and provide an immediate outlet for fun and play. Although cats are independent animals who like to scavenge and explore on their own terms, they are also very affectionate with their owners and people they trust."
    },
    {
      Date: "Jan 8 2022",
      Title: "Everything you need before bringing a cat home in Singapore",
      Description: "A full guide on everything you need to have in your houses before adopting a pet. Most cat shelters will require these prior to adoption!"
    },
    {
      Date: "Jan 8 2022",
      Title: "WORST Mistakes You Make With Your Cat",
      Description: "We all make mistakes when it comes to life with our cats. Believe me, I’ve made plenty, which is part of the reason I’m sharing this list with you. In the end, this list is more about opportunity to forgive yourself for anything that has happened up until this point, and opportunity to move forward armed with information that could provide a much happier life for your cats - and for your relationship, also!"
    }  
  ]
  return (
    <div >
      <Header Title = "Cat Care" Description="a full guide for adopters about cats and how to care for them! this page will help you alot in passing the pre-adoption quiz and being a new pet parent :)" className="mb-12"/>
      {articleCards.map((article) => {
        return(
        <PetCareCards Title = {article.Title} Date = {article.Date} Description={article.Description} />
        );
      })}
      <Pagination/>
      {/* <Article/> */}




      
    </div>
  )
}

export default PetCare
