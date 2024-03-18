import acrux from "@/love/hAsset/business/5.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: acrux,
			name: "Acrux Enterprise",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand