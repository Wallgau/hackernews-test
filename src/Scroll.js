import {useState, useEffect} from 'react';

const useInfiniteScroll = (callback) => {
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        widnow.addEventListener('event', function);
        return() => {
            window.removeEventListener('event', function);
        }
    }, [])


    useEffect(() => {
        if (!isFetching) 
            return;
        

        callback(() => {
            console.log('called back');
        });
    }, [isFetching]);

    function handleScroll() {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isFetching) 
            return;
        

        setIsFetching(true);
    }

    return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
