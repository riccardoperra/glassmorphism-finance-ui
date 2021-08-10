import { transactions } from './transactions';

const recentPaymentListEl = document
  .querySelector('.app')
  .querySelector('.recent-transaction-list');

transactions.forEach(({ name, price, type, initial, date }) => {
  const liEl = document.createElement('li');
  liEl.innerHTML = `
    <div class="payment-card">
        <div class="payment-badge">${initial}</div>
        <div class="payment-info">
            <div>${name}</div>
            <div class="payment-type">
                ${
                  type === 'Refunded'
                    ? `<span class="refunded">${type}</span>`
                    : type
                }
            </div>
        </div>
        <div class="payment-date">
            <div class="payment-date-content">${date}</div>
            <div class="payment-date-title">Last payment</div>
        </div>
        <div class="payment-price">
            ${
              type === 'Money received' || type === 'Refounded'
                ? `<i class="fas fa-fw fa-angle-up"></i>`
                : `<i class="fas fa-fw fa-angle-down"></i>`
            }
            <span>${price}</div>
        </div>
        <div class="payment-actions">
            <i class="fas fa-ellipsis-v"></i>
        </div>
    </div>
`;

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
