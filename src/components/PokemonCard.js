import { Card ,CardBody, CardFooter, Image, Badge, Heading, useDisclosure } from "@chakra-ui/react";
import { enumTypes } from "../utils/enums";
import PokemonModal from "./PokemonModal";

const PokemonCard = ({ pokemon }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const typesArray = pokemon.types.map(pokemonType => {
        const {type: tp} = pokemonType;
        return(enumTypes.find(enumType => enumType.name === tp.name))
    })

    const pokemonImage = pokemon.sprites.other['official-artwork'].front_default;
    
    return (
        <>
            <Card onClick={onOpen}>
                <CardBody>
                    <Image
                        src={pokemonImage}
                    />
                    <Heading as='h2' size='md' marginTop='8px' textTransform={"capitalize"}>{pokemon.name}</Heading>
                </CardBody>
                <CardFooter gap={2}>
                    {
                        typesArray.map(pokemonType => (<Badge colorScheme={pokemonType.color}>{pokemonType.name}</Badge>))
                    }
                </CardFooter>
            </Card>
            <PokemonModal isOpen={isOpen} onClose={onClose} pokemon={pokemon}/>
        </>
    );
}

export default PokemonCard;