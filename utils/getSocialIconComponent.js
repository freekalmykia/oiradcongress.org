import * as SocialIconsComponent from '../components/social';

export const getSocialIconComponent = ( { name, props } ) => {
	const ComponentsMap = {
    twitter: SocialIconsComponent.Twitter,
		facebook: SocialIconsComponent.Facebook,
		instagram: SocialIconsComponent.Instagram,
		linkedin: SocialIconsComponent.Linkedin
	}

	if ( name in ComponentsMap ) {
		const SocialIconComponent = ComponentsMap[name];
		return <SocialIconComponent {...props} />;
	} else {
		return null
	}
}