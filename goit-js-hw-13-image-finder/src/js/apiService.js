const API_KEY = '21141411-eb823bafbda7b049277559c1c';
const BASE_URL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
const PER_PAGE = 12;


export default class PixabayApiService{
        constructor(){
            this.searchQuery = '';
            this.page = 1;
        }

        async fetchPictures() {
            const responseUrl = await fetch(
                `${BASE_URL}&q=${this.searchQuery}&page=${this.page}&per_page=${PER_PAGE}&key=${API_KEY}`,
            );
                
            const images = await responseUrl.json();
            this.incrementPage();
        
            return images; 
            }

    incrementPage(){
        this.page +=1;
    }

    resetPage(){
        this.page = 1;
    }

    get query(){
        return this.searchQuery;
    }
    set query(newQuery){
        this.searchQuery = newQuery;
    }
    
}



