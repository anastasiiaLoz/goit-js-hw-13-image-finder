import PixabayApiService from './apiService.js';
import templateList from '../templates/templateList.hbs';
import refs from './refs.js'
import {onGalleryElClick} from './module.js'
import 'material-design-icons/iconfont/material-icons.css';
import LoadMoreBtn from './loadMore.js'

const apiService = new PixabayApiService();
const loadMoreBtn = new LoadMoreBtn({
    loadMore: '[data-action="load-more"]',
    hidden: true,
    });

refs.form.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', onLoadMore);
refs.gallery.addEventListener('click', onGalleryElClick);


function onSearch(e){
    e.preventDefault();
    clearPicturesContainer();
    
    apiService.query = e.currentTarget.elements.query.value;

        if(apiService.query === ''){
        return alert('Insert what you are looking for');
    }
    loadMoreBtn.show();
    apiService.resetPage();
    fetchImages();
}
    
    function fetchImages() { 
        loadMoreBtn.disable();
        return apiService.fetchPictures().then(images => {
            appendPicturesMarkup(images);
            loadMoreBtn.enable();
    
            if (images.length === 0) {
            loadMoreBtn.hide();
            }
        });
    }


function onLoadMore(){
    fetchImages();
        setTimeout (scrollPage, 500)
}

function scrollPage() {
    let position = 0;
        window.scrollTo({
        top: document.querySelector('body').scrollHeight,
        left: 0,
        behavior:'smooth',
    });
}

function appendPicturesMarkup(images){
    refs.gallery.insertAdjacentHTML('beforeend', templateList(images));
}

function clearPicturesContainer(){
    refs.gallery.innerHTML = '';
}