import DarkGenereMovies from '@/container/GenereMovies/DarkGenereMovies';
import GenereMovies from '@/container/GenereMovies/GenereMovies'
import HeroCarousel from '@/container/HeroCarousel/HeroCarousel';
import MovieSection from '@/container/HeroCarousel/MovieSection';
import Movietab from '@/container/HeroCarousel/MovieTab';
import MovieGrid from '@/container/MovieGrid/MovieGrid'
import SquareMovieGrid from '@/container/MovieGrid/SquareMovieGrid';
import TopCharts from '@/container/TopCharts/TopCharts'
import Image from 'next/image'

export default function Home() {
  const mainSlides: string[] = [
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/36-cztery-lwy-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/3-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/43-only-lovers-left-alive-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/33-a-woman-under-the-influence-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/23-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/1-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/23-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/1-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/13-300x450.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/1-300x450.jpg",
  ];

  const imageLinks = [
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/18-baby-blue.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/17-1.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/16-1.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-1.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/14-1.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/16-1.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-1.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/14-1.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/15-1.jpg",
    "https://demo3.madrasthemes.com/vodi-demos/main/wp-content/uploads/sites/2/2019/04/14-1.jpg"
  ];
  return (
    <>
      <HeroCarousel />
      <MovieGrid isDarker isLight movieData={mainSlides} />
      <GenereMovies isDarker={false} reverse isLight={false} text='Romantic for Valentines Day' />
      <MovieSection />
      <GenereMovies isDarker={true} reverse={false} isLight={true} text='Romantic for Valentines Day' />
      <DarkGenereMovies isDarker={false} reverse isLight={true} text='Romantic for Valentines Day' />
      <Movietab />
      <SquareMovieGrid isDarker isLight movieData={imageLinks} />
      <TopCharts />
    </>
  )
}
