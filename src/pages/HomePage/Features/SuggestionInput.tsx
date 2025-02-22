import React, { useState, useEffect } from 'react';
import { StyledInput } from '../../../ui/StyledInput';
import Container from '../../../ui/Container';
import { Flex } from '../../../ui/Flex';
import { useDispatch } from 'react-redux';
import { addWeatherObject, changeInputValue, changeCurrentCity } from '../../../slices/weatherReducer';
import Weather from '../../../api/FetchWeather';
import useDebounce from './useDebounce';
import { useNavigate } from 'react-router-dom';

interface Option {
    id: number;
    name: string;
    region?: string;
    country?: string;
    lat?: number;
    lon?: number;
    url?: string;
}

const SuggestionInput: React.FC = () => {
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const options: Option[] = [];
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const navigate = useNavigate();
    
    const debouncedAutoFills = useDebounce(async (value: string) => {
        const autoFillSuggestions = await Weather.getAutoFill(value) as { name: string }[];
        const autoFillSet = new Set(autoFillSuggestions.map(fill => fill.name));
        const uniqueAutoFills = Array.from(autoFillSet);
        setSuggestions(uniqueAutoFills);
    }, 1000);

    useEffect(() => {
        dispatch(changeInputValue(inputValue)); 
    }, [inputValue, dispatch]);

    const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const value: string = event.target.value;
        setInputValue(value);

        if (value.length > 2) {
            debouncedAutoFills(value);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelect = (value: string) => {
        setInputValue(value);
        setSuggestions([]);
        dispatch(changeInputValue(value));
    };

    const handleEnter: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
        if (e.key === "Enter") {
            (async () => {
                dispatch(changeCurrentCity(inputValue));
                dispatch(addWeatherObject(await Weather.getWeatherInfo(inputValue)));
                setSuggestions([]);
                navigate(`/city/${inputValue}`);
            })();
        }
    };

    return (
        <Flex $flexDirection="column" $alignItems='center' $position='relative'>
            <StyledInput
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
            {suggestions.length > 0 && (
                <Container $position='absolute' $border='1px solid #ccc' width='80%' $backgroundColor='white' $borderRadius='10px' $padding='15px' $margin='7%'>
                    {suggestions.map((option, index) => (
                        <div style={{ margin: "6px", border: "1px solid #ccc", cursor: 'pointer' }} key={index} onClick={() => handleSelect(option)}>
                            {option}
                        </div>
                    ))}
                </Container>
            )}
        </Flex>
    );
};

export default SuggestionInput;
