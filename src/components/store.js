import { createStore } from 'redux';
import swal from 'sweetalert';

let initialState = {
  products: [
    {
      id: 1,
      removeid: 1,
      image: `https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/1.jpeg`,
      title: 'Upsc New Syllabus',
      catagory: 'English, Electronic book text, Experts Disha',
      rating: '4.3',
      price: 120,
      description: `The book "Upsc New Syllabus", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
      productNumber: 1,
    },
    {
      id: 2,
      image:
        'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/2.jpeg',

      title: 'Indian Polity',
      catagory: 'English, Paperback, M. Laxmikanth',
      rating: '4.9',
      price: 699,
      productNumber: 2,
      description: `The book "Indian Polity", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
    },
    {
      id: 3,
      image:
        'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/3.jpeg',
      title: 'Indian History',
      catagory: 'English, Paperback, Krishna Reddy',
      rating: '4.5',
      price: 759,
      description: `The book "Indian History", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
      productNumber: 3,
    },
    {
      id: 4,
      image:
        'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/4.jpeg',
      title: 'Indian Geography',
      catagory: 'English, Paperback, Majid Husain',
      rating: '4.7',
      price: 599,
      description: `The book "Indian Geography", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
      productNumber: 4,
    },
    {
      id: 5,
      image:
        'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/5.jpeg',
      title: 'Indian Art & Culture',
      catagory: 'English, Paperback, Nitin Singhania',
      rating: '4.2',
      price: 459,
      description: `The book "Indian Art & Culture", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
      productNumber: 5,
    },
    {
      id: 6,
      image:
        'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/6.jpeg',
      title: 'Indian Economy',
      catagory: 'English, Paperback, Ramesh Singh',
      rating: '4.5',
      price: 560,
      productNumber: 6,
      description: `The book "Indian Economy", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
    },
    {
      id: 7,
      image:
        'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/7.jpeg',
      title: 'Solved Papers',
      catagory: 'English, Paperback, Experts',
      rating: '4.3',
      price: 350,
      productNumber: 7,
      description: `The book "Solved Papers", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
    },
    {
      id: 8,
      image:
        'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/8.jpeg',
      title: '25 Years Upsc IAS Papers',
      catagory: 'English, Electronic book text, Experts Disha',
      rating: '4.2',
      price: 605,
      productNumber: 8,
      description: `The book "25 Years Upsc IAS Papers", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
    },
    {
      id: 9,
      image:
        'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/9.jpeg',
      title: '121 Essays for IAS',
      catagory: 'English, Paperback, Experts Disha',
      rating: '4.4',
      price: 204,
      description: `The book "121 Essays for IAS", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
      productNumber: 9,
    },
    {
      id: 10,
      image:
        'https://veeravenkatasaidurgaprasad.com/wp-content/uploads/2021/09/10.jpeg',
      title: 'History of Modern India',
      catagory: 'English, Paperback, Rajiv Ahir',
      rating: '4.8',
      price: 279,
      description: `The book "History of Modern India", 6th edition is a must-read for the aspirants appearing for the Civil Services Examinations as well as the other state Services Examinations. It is conceived to cater to the requirements of not just students appearing for competitive examinations but also postgraduates, research scholars, academics and General readers who are interested in the country political, Civil and constitutional issues. The extant chapters have been thoroughly revised and updated as per the recent developments.<Salient features:
      ✔ 80 chapters and 16 appendices covering the entire Indian political and constitutional spectrum
      
      ✔ chapters rearranged as per the latest pattern of the examination
      
      ✔ coverage on the recent developments in Jammu & Kashmir and Ladakh, constitutional interpretation, judicial review and judicial activism
      
      ✔ updated previous years’ questions and revised practice questions for both Preliminary and Mains Examinations
      
      ✔ one-stop reference for the Civil Services aspirants, students of law, political Science and public Administration
      
      ✔ 6 New chapters:
      
      Goods and Services Tax Council
      
      National Commission for backward classes
      
      National investigation agency
      
      National disaster Management
      
      role of regional parties
      
      coalition government`,
      productNumber: 10,
    },
  ],
  cartItems: [],
  productPage: [],
  count: 0,
};

export const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    case 'ADDTOCART': {
      let data = { ...state };

      const isProductAdded = data.cartItems.some(
        (el) => el.id === action.details.id
      );

      if (!isProductAdded) {
        data.cartItems.push({ ...action.details, quantity: 1 });
      }
      const innerTextChange = document.querySelector('.textChange');
      const changeToAdded = document.querySelector('.addToCart');
      const addToCartOldText = changeToAdded.innerHTML;
      changeToAdded.innerText = 'Added to Cart';
      const oldText = innerTextChange.innerText;

      innerTextChange.innerHTML = 'Added in Cart';

      const offerText = document.querySelector('.newOffer');
      const countDownDate = new Date('Oct 15, 2021 00:00:00').getTime();

      const x = setInterval(function () {
        const now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        offerText.innerHTML =
          'Offer Expires in ' +
          days +
          'd ' +
          hours +
          'h ' +
          minutes +
          'm ' +
          seconds +
          's';
        if (distance < 0) {
          clearInterval(x);
          offerText.innerHTML = 'EXPIRED';
        }
        offerText.style.color = '#5f3dc4';
      }, 1000);

      setTimeout(() => {
        changeToAdded.innerHTML = addToCartOldText;
        innerTextChange.innerHTML = oldText;
      }, 2000);
      return { ...data };
    }

    case 'ProductDetailsPage': {
      let data = { ...state };
      const isProductPageAdded = data.productPage.some(
        (el) => el.id === action.details.id
      );
      if (!isProductPageAdded) {
        data.productPage[0] = { ...action.details };
        data.productPage.splice(1);
      }
      return { ...data };
    }

    case 'remove': {
      let data = { ...state };
      {
        function removeAlert() {
          let remover = window.confirm(
            'Are you sure you want to remove books?'
          );
          if (remover === true) {
            let filter = data.cartItems.filter((n) => !n.id);
            data.cartItems = filter;
          } else {
            data.cartItems;
          }
        }
        removeAlert();
      }
      return { ...data };
    }

    case 'like': {
      const like = document.querySelector('.fa-heart');
      const beat = document.querySelector('.likeText');
      setInterval(() => {
        like.classList.toggle('likeBlue');
        beat.innerText = 'Lub';
        beat.innerText = 'dub';
      }, 60000 / 75);
    }

    case 'UPDATEQUANTTY': {
      let data = { ...state };
      const updatedItems = data.cartItems.map((item) =>
        item.productId === action.productId
          ? { ...item, quantity: parseInt(action.quantity) }
          : { ...item }
      );
      return { ...data, cartItems: [...updatedItems] };
    }
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
