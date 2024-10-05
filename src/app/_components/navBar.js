

export function navBar()
{
    const navBar=document.querySelector('.navBar');
    
    const title=document.createElement('h1');
    title.textContent='Our Website Title';
    const profile=document.createElement('button');
    
    profile.textContent='Profile';

    
    navBar.appendChild(title);
    navBar.appendChild(profile);
    // Implement profile button
        //should display user's profile(we are aiming to use google accounts for this)
    
    
}