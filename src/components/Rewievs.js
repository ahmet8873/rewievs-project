import people from '../data'
import {useState} from 'react'
import {FaChevronLeft, FaChevronRight,FaQuoteRight} from 'react-icons/fa'

const Rewievs = () => {
    
    const[index,setIndex]=useState(0)
    const {name, job,image,text}=people[index]
    const[readmore,setReadmore]=useState(true)

    const checkNumber=(num)=>{
        if(num<0){
            return people.length-1
        }
        if(num>people.length-1){
            return 0
        }
        return num
    }

 return (
    <article className='rewiev'>
        <div className="img-container">
            <img src={image} alt={name} className='person-img' />
            <span className="quote-icon">
                <FaQuoteRight className='inner-icon'/>
            </span>
        </div>
        <h4 className='author-name'>{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{readmore?text:`${text.substring(0,20)}...`} 
        <button onClick={()=>setReadmore(!readmore)}>{readmore?'show less':'read more'}</button>
        </p>
        <div className="button-container">
            <button onClick={()=>{setIndex(prev=>checkNumber(prev-1))}} className='btn prev-btn'>
                <FaChevronLeft/>
            </button>
            <button onClick={()=>{setIndex(prev=>checkNumber(prev+1) )}} className='btn next-btn'>
                <FaChevronRight/>
            </button>
            <button onClick={()=>{setIndex(Math.floor(Math.random()*4))}} className='btn random-btn'>
                surprise 
            </button>
        </div>
    </article>
  )
}

export default Rewievs