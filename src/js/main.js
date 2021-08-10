const transactions = [
  {
    initial: 'JD',
    name: 'John Doe',
    type: 'Money received',
    date: '10/08/2021',
    price: '20,00 EUR',
  },
  {
    initial: 'G',
    name: 'Google',
    type: 'Automatic payment',
    date: '09/08/2021',
    price: '1,99 EUR',
  },
  {
    initial: 'JD',
    name: 'John Doe',
    type: 'Refunded',
    date: '04/04/2021',
    price: '150,00 EUR',
  },
  {
    initial: 'JD',
    name: 'John Doe',
    type: 'Money sent',
    date: '10/02/2020',
    price: '10,00 EUR',
  },
];

const recentPaymentListEl = document
  .querySelector('.app')
  .querySelector('.recent-transaction-list');

transactions.forEach(({ name, price, type, initial, date }) => {
  const liEl = document.createElement('li');

  const cardEl = document.createElement('div');
  cardEl.classList.add('payment-card');

  const badge = document.createElement('div');
  badge.classList.add('payment-badge');
  badge.innerHTML = initial;

  const info = document.createElement('div');
  info.classList.add('payment-info');
  const paymentUsername = document.createElement('div');
  paymentUsername.innerHTML = name;

  const paymentType = document.createElement('div');
  paymentType.classList.add('payment-type');
  if (type === 'Refunded') {
    const refundedType = document.createElement('span');
    refundedType.classList.add('refunded');
    refundedType.innerHTML = type;
    paymentType.appendChild(refundedType);
  } else {
    paymentType.innerHTML = type;
  }

  info.appendChild(paymentUsername);
  info.appendChild(paymentType);

  const paymentDate = document.createElement('div');
  paymentDate.classList.add('payment-date');
  paymentDate.innerHTML = `
    <div class="payment-date-content">${date}</div>
    <div class="payment-date-title">Last payment</div>
  `;

  const paymentPrice = document.createElement('div');
  paymentPrice.classList.add('payment-price');
  const priceIcon = document.createElement('i');
  priceIcon.classList.add('fas');
  priceIcon.classList.add('fa-fw');
  priceIcon.classList.add(
    type === 'Money received' || type === 'Refunded'
      ? 'fa-angle-up'
      : 'fa-angle-down'
  );

  const paymentPriceNumber = document.createElement('span');
  paymentPriceNumber.innerHTML = price;

  paymentPrice.appendChild(priceIcon);
  paymentPrice.appendChild(paymentPriceNumber);

  const actions = document.createElement('div');
  actions.innerHTML = `<i class="fas fa-ellipsis-v"></i>`;

  cardEl.appendChild(badge);
  cardEl.appendChild(info);
  cardEl.appendChild(paymentDate);
  cardEl.appendChild(paymentPrice);
  cardEl.appendChild(actions);

  liEl.appendChild(cardEl);
  recentPaymentListEl.appendChild(liEl);
});

document
  .querySelector('.app')
  .querySelector('.app-header')
  .querySelector('.slider-toggle-wrapper')
  .addEventListener('click', (evt) => {
    const toggle = document.querySelector('.slider-toggle');
    if (toggle.classList.contains('is-selected')) {
      toggle.classList.remove('is-selected');
      document.body.classList.add('light-mode');
    } else {
      toggle.classList.add('is-selected');
      document.body.classList.remove('light-mode');
    }
  });
