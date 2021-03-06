export default class LoadMoreBtn {
    constructor({ loadMore, hidden = false }) {
        this.refs = this.getRefs(loadMore);

        hidden && this.hide();
    }

    getRefs(loadMore) {  //Селектор
        const refs = {};
        refs.button = document.querySelector(loadMore);
        refs.label = refs.button.querySelector('.label');
        refs.base = document.querySelector('.base-layer');
        
        return refs;
    }
    
    enable() {
        this.refs.button.disabled = false;
        this.refs.label.textContent = 'Load more';
    
    }
    
    disable() {
        this.refs.button.disabled = true;
        this.refs.label.textContent = 'Loading...';
    }
    
    show() {
        this.refs.button.classList.remove('is-hidden');
        this.refs.base.classList.remove('is-shown');
    }
    
    hide() {
        this.refs.button.classList.add('is-hidden');
        this.refs.base.classList.add('is-shown');
    }
    }