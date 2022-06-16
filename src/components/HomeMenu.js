import Border from './Border';
import MovieCardHome from './MovieCardHome';
import { Animate } from "react-simple-animate";

const HomeMenu = () => {

  const apiPoint = {
    baseUrl : 'https://api.themoviedb.org/3/movie/',
    type  : ['now_playing','week', 'popular', 'upcoming','movie'],
    api_key : '4bc2cade9fe707e58b1a3664331023cd'
  }

    return (
      <div id="contenedor">
        <div className="module">
        <div className="content left full">
          
      
      
      
      
  
        <Animate easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)" play={true} duration={1} delay={0.3} start={{ opacity: 0 }} end={{ opacity: 1 }}>
        
        <Border name={'Now Playing'} name_left={'Swipe >'}/>
        <MovieCardHome baseUrl={apiPoint.baseUrl} type={apiPoint.type[0]} api_key={apiPoint.api_key}/></Animate>
        
        
        <Animate play={true} duration={1} delay={0.3} start={{ opacity: 0 }} end={{ opacity: 1 }}><Border name={'Animation'} name_left={'see all >'} genre={'Animation'} id={'16'}/>
        <MovieCardHome baseUrl={'https://api.themoviedb.org/3/discover/'} type={apiPoint.type[4]} api_key={'4bc2cade9fe707e58b1a3664331023cd&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=16&with_watch_monetization_types=flatrate'}/></Animate>

        <Animate play={true} duration={1} delay={0.3} start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <Border name={'Horror'} name_left={'see all >'} genre={'Horror'} id={'27'}/>
        <MovieCardHome baseUrl={'https://api.themoviedb.org/3/discover/'} type={apiPoint.type[4]} api_key={'4bc2cade9fe707e58b1a3664331023cd&sort_by=popularity.desc&include_adult=false&include_video=false&with_genres=27&with_watch_monetization_types=flatrate'}/></Animate>
        
        <Animate play={true} duration={1} delay={0.3} start={{ opacity: 0 }} end={{ opacity: 1 }}>
        <Border name={'Bollywood'} name_left={'see all >'} genre={'Bollywood'} id={''}/>
        <MovieCardHome baseUrl={'https://api.themoviedb.org/3/discover/'} type={apiPoint.type[4]} api_key={'dbc0a6d62448554c27b6167ef7dabb1b&region=IN&sort_by=popularity.desc&with_original_language=hi'}/></Animate>
        
      
  
  
      
      
      </div>
      </div></div>
      )
};

export default HomeMenu;