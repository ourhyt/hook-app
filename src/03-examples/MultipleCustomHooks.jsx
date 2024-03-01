import {useFetch, useCounter} from "../hooks";
import {LoadingQuote} from "./LoadingQuote.jsx";
import {Quote} from "./Quote.jsx";

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1);
    const {data,isLoading} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)
    const { author, quote} = !!data && data[0];
    return (
        <>
            <h1>BrakingBad Quotes</h1>
            <hr />

            {
                isLoading ? (
                    <LoadingQuote/>
                ):(
                    <Quote quote={quote} author={author}/>
                )
            }

            <button disabled={isLoading} onClick={()=>increment()} className="btn btn-primary">
                Next quote
            </button>
        </>
    )
}
