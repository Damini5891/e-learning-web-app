import { Component } from '@angular/core';
interface Blog {
  category: string;
  title: string;
  content: string;
  imageUrl: string;
  learnMoreLink: string;
  likes: number;
  comments: number;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  blogData: Blog[] = [
    {
      category: "CATEGORY",
      title: "The Catalyzer",
      content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/720x400",
      learnMoreLink: "https://example.com/catalyzer",
      likes: 1200,
      comments: 6,
    },
    {
      category: "CATEGORY",
      title: "The 400 Blows",
      content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/721x401",
      learnMoreLink: "https://example.com/400blows",
      likes: 1200,
      comments: 6,
    },
    {
      category: "CATEGORY",
      title: "Shooting Stars",
      content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/722x402",
      learnMoreLink: "https://example.com/shootingstars",
      likes: 1200,
      comments: 6,
    },
    {
      category: "CATEGORY",
      title: "Shooting Stars",
      content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/722x402",
      learnMoreLink: "https://example.com/shootingstars",
      likes: 1200,
      comments: 6,
    },
    {
      category: "CATEGORY",
      title: "Shooting Stars",
      content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/722x402",
      learnMoreLink: "https://example.com/shootingstars",
      likes: 1200,
      comments: 6,
    },
    {
      category: "CATEGORY",
      title: "Shooting Stars",
      content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/722x402",
      learnMoreLink: "https://example.com/shootingstars",
      likes: 1200,
      comments: 6,
    },
    {
      category: "CATEGORY",
      title: "Shooting Stars",
      content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/722x402",
      learnMoreLink: "https://example.com/shootingstars",
      likes: 1200,
      comments: 6,
    },
    {
      category: "CATEGORY",
      title: "Shooting Stars",
      content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/722x402",
      learnMoreLink: "https://example.com/shootingstars",
      likes: 1200,
      comments: 6,
    },
    {
      category: "CATEGORY",
      title: "Shooting Stars",
      content: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imageUrl: "https://dummyimage.com/722x402",
      learnMoreLink: "https://example.com/shootingstars",
      likes: 1200,
      comments: 6,
    },
    // Add more blog entries as needed
  ];
}
