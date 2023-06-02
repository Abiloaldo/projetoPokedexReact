import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Image, Flex, Text } from "@chakra-ui/react";

const PokemonInfo = ({label, value}) => (
    <Flex direction="row" gap={1}>
        <Text fontWeight="bold" textTransform={"capitalize"}>{label}:</Text>
        <Text>{value}</Text>
    </Flex>
)

const PokemonModal = ({isOpen, onClose, pokemon}) => {
    const pokemonImage = pokemon.sprites.other['official-artwork'].front_default;
    console.log(pokemon)
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textTransform={"capitalize"}>{pokemon.name}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Image src={pokemonImage}/>
                    <PokemonInfo label="Peso" value={`${pokemon.weight / 10} Kg`}/>    
                    <PokemonInfo label="Altura" value={`${pokemon.height / 10} M`}/>              
                </ModalBody>
            </ModalContent>
        </Modal>
    );
}

export default PokemonModal;