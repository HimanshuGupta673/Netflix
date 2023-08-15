import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect,useState} from 'react'

const Header = () => {
    const [movies, setMovies] = useState([]);
    console.log(movies)
    const API_KEY = "6fbdeb3f3b45738d512e46489f117748";

    useEffect(() => {
        const movieData = async () => {
            await fetch(
                `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
            )
                .then((response) => response.json())
                .then((data) =>
                    setMovies(
                        data.results[Math.floor(Math.random() * data.results.length - 1)]
                    )
                );
        };
        movieData();
    }, []);
    return (
        <View>
            <Text>Header</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})