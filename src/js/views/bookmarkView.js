import View from './view';
import icons from '../../img/icons.svg';

class BookmarkView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet !';

  _generateMarkup() {
    return this._data.map(this._generateMarkupPreview).join(' ');
  }
  _generateMarkupPreview(results) {
    const id = window.location.hash.slice(1);

    return `
    <li class="preview">
            <a class="preview__link ${
              id === results.id ? 'preview__link--active' : ''
            }" href="#${results.id}">
              <figure class="preview__fig">
                <img src="${results.image}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${results.title}</h4>
               
                
              </div>
            </a>
          </li>
    
    `;
  }
}

export default new BookmarkView();
