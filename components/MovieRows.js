import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import movieUrl from '../data/moviesUrl'
import MovieRow from './MovieRow';
const MovieRows = () => {
    const data = movieUrl;
  return (
    <View>
        {data.map((movie,id) => (
            <MovieRow key={id} title={movie.name} url={movie.url}/>
        ))}
    </View>
  )
}

export default MovieRows

const styles = StyleSheet.create({})