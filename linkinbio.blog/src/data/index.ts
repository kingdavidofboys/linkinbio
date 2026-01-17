export interface Profile {
  name: string;
  title: string;
  bio: string;
  avatar: string;
  background: string;
}

export interface SocialLink {
  id: string;
  title: string;
  url: string;
  iconPath?: string;
  type: 'email' | 'whatsapp' | 'instagram' | 'other';
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
}

export interface SliderImage {
  id: string;
  src: string;
  alt: string;
}

export const profileData: Profile = {
  name: "Mitchel's Links",
  title: "Web Designer & Graphics Designer",
  bio: "Helping you create powerful, customized Instagram bio links!",
  avatar: "/images/mark.jpg",
  background: "/images/background.jpg"
};

export const linksData: SocialLink[] = [
  {
    id: '1',
    title: 'Email Me',
    url: 'mailto:mitchel1234special@gmail.com',
    iconPath: '/images/gmailIcon.png',
    type: 'email'
  },
  {
    id: '2',
    title: 'WhatsApp',
    url: 'https://wa.link/24c8wn',
    iconPath: '/images/whatsappIcon.png',
    type: 'whatsapp'
  },
  {
    id: '3',
    title: 'DM on Instagram',
    url: 'https://instagram.com/frameyourloveart',
    iconPath: '/images/instaicon2.png',
    type: 'instagram'
  }
];

export const sliderData: SliderImage[] = [
  { id: '1', src: '/images/cosmic.jpg', alt: 'Slide 1' },
  { id: '2', src: '/images/sharp.jpg', alt: 'Slide 2' },
  { id: '3', src: '/images/pets.jpg', alt: 'Slide 3' },
  { id: '4', src: '/images/profilepage.jpg', alt: 'Slide 4' },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'John Doe',
    content: '5 star that what i would rate his service',
    rating: 5
  },
  {
    id: '2',
    name: 'Jane Smith',
    content: 'Exceeded my expectations, will definitely work with again.',
    rating: 5
  },
  {
    id: '3',
    name: 'Gabriel Reed',
    content: 'I love the work that as been done ,it as helped me organise all my socialmedia in one and in a more customizable manner.',
    rating: 5
  },
  {
    id: '4',
    name: 'Idowu Bello',
    content: 'it expresses my page more and in a more customized manner, it look super sleek premium 100+ bro',
    rating: 5
  }
];
