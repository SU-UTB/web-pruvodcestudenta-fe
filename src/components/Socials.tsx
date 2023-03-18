import styled from "styled-components";

import facebook from '../assets/icons/facebook.svg';
import instagram from '../assets/icons/instagram.svg';
import youtube from '../assets/icons/youtube.svg';

const SocialsWrapper = styled.div`
  display: flex;
  margin-right: 60px;
  align-items: center;
`

const SocialImage = styled.img`
  margin-right: 30px;
`

enum SocialType {
    instagram,
    facebook,
    youtube
}

interface ISocialItem {
    type: SocialType;
    link: string;
    alt: string;
}

const SocialItems: ISocialItem[] = [
    {type: SocialType.instagram, link: "https://www.instagram.com/utbzlin/?hl=cs", alt: 'instagram_link'},
    {type: SocialType.facebook, link: "https://www.facebook.com/UTBZlin", alt: 'facebook_link'},
    {type: SocialType.youtube, link: "https://www.youtube.com/c/univerzitatomasebativezline", alt: 'youtube_link'}
]

function getImage(type: SocialType) {
    switch (type) {
        case SocialType.facebook:
            return facebook;
        case SocialType.instagram:
            return instagram;
        case SocialType.youtube:
            return youtube;

    }
}

export const Socials = () => <SocialsWrapper>
    {SocialItems.map(({type, link, alt}) => <a key={type.toString()} href={link}>
        <SocialImage src={getImage(type)} alt={alt}></SocialImage>
    </a>)}
</SocialsWrapper>;