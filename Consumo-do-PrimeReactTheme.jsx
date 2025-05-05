import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import './App.css'

// Importação dos estilos base do PrimeReact (sem tema específico)
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

function ThemeSwitcherSimple() {
  // Estado para controlar o tema atual (começa com tema claro)
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  // Função para alternar entre tema claro e escuro
  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };
  
  // Aplica o tema quando o estado mudar
  useEffect(() => {
    // Remove o tema anterior
    const linkElement = document.getElementById('app-theme');
    if (linkElement) {
      linkElement.remove();
    }
    
    // Adiciona o novo tema baseado no estado
    const themeHref = isDarkTheme 
      ? 'https://unpkg.com/primereact/resources/themes/lara-dark-indigo/theme.css'
      : 'https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css';
    
    const newThemeLink = document.createElement('link');
    newThemeLink.setAttribute('id', 'app-theme');
    newThemeLink.setAttribute('rel', 'stylesheet');
    newThemeLink.setAttribute('href', themeHref);
    
    document.head.appendChild(newThemeLink);
  }, [isDarkTheme]);
  
  return (
    <div style={{ 
      padding: '2rem', 
      backgroundColor: isDarkTheme ? '#121212' : '#f8f9fa',
      color: isDarkTheme ? '#ffffff' : '#333333',
      minHeight: '100vh',
      transition: 'background-color 0.3s, color 0.3s'
    }}>
      <h1>Exemplo de Tema no PrimeReact</h1>
      
      <Button 
        label={isDarkTheme ? "Mudar para Tema Claro" : "Mudar para Tema Escuro"} 
        icon={isDarkTheme ? "pi pi-sun" : "pi pi-moon"} 
        onClick={toggleTheme}
        className={isDarkTheme ? "p-button-outlined" : "p-button-filled"}
        style={{ marginTop: '1rem' }}
      />
    </div>
  );
}

export default ThemeSwitcherSimple;
