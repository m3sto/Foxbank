// GitHub Data Endpoints
const USERS_URL = 'https://raw.githubusercontent.com/m3sto/Foxbank/main/data/users.json';
const TRANSACTIONS_URL = 'https://raw.githubusercontent.com/m3sto/Foxbank/main/data/transactions.json';

document.addEventListener('DOMContentLoaded', async () => {
    // Yükleme ekranını kapat
    setTimeout(() => {
        document.querySelector('.loader').style.display = 'none';
        document.querySelector('.login-container').classList.remove('hidden');
    }, 2000);

    // Menü İşlemleri
    document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.side-menu').style.transform = 'translateX(0)';
    });

    document.querySelector('.close-btn').addEventListener('click', () => {
        document.querySelector('.side-menu').style.transform = 'translateX(-100%)';
    });

    // Giriş İşlemi
    document.getElementById('loginForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const users = await fetchData(USERS_URL);
        // Giriş kontrolü yap...
    });

    // Transfer İşlemi
    document.getElementById('transferForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        // Transfer işlemlerini GitHub'a kaydet...
    });
});

async function fetchData(url) {
    const response = await fetch(url);
    return await response.json();
}