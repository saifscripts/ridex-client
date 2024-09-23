import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { bikeAvailabilityOptions, bikeBrandOptions } from '@/constants';
import { SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SearchFilters() {
  const [brand, setBrand] = useState('');
  const [isAvailable, setIsAvailable] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleBrandChange = (value: string) => {
    const updatedValue = value === 'all' ? '' : value;
    setBrand(updatedValue);
  };

  const handleAvailabilityChange = (value: string | boolean) => {
    const updatedValue = value === 'any' ? '' : String(value);
    setIsAvailable(updatedValue);
  };

  return (
    <div
      className="flex justify-center items-center flex-1 h-[calc(100svh-64px)] pb-20 md:pb-0"
      data-aos="fade-left"
    >
      {/* Search Bar */}
      <div className="w-full max-w-sm bg-black/40 dark:bg-background/60 rounded-lg p-4 space-y-4">
        <div className="relative">
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-background/80"
            placeholder="Search bikes"
          />
          <SearchIcon
            size={12}
            className="absolute top-1/2 right-[14px] -translate-y-1/2 text-muted-foreground"
          />
        </div>

        {/* Select Brand */}
        <Select onValueChange={handleBrandChange} defaultValue="all">
          <SelectTrigger className="bg-background/80">
            <SelectValue placeholder="Brand: All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">
              Brand <b>All</b>
            </SelectItem>
            {bikeBrandOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Select Availability */}
        <Select onValueChange={handleAvailabilityChange} defaultValue="any">
          <SelectTrigger className="bg-background/80">
            <SelectValue placeholder="Availability: Any" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="any">
              Availability <b>Any</b>
            </SelectItem>
            {bikeAvailabilityOptions.map((option) => (
              <SelectItem
                key={String(option.value)}
                value={String(option.value)}
              >
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* Search Button */}
        <Link
          to={{
            pathname: '/bikes',
            search: `${brand && `brand=${brand}`}${
              isAvailable && `&isAvailable=${isAvailable}`
            }${searchTerm && `&searchTerm=${searchTerm}`}`,
          }}
          className="block"
        >
          <Button className="w-full flex items-center gap-2">
            <SearchIcon size={16} />
            Search Bikes
          </Button>
        </Link>
      </div>
    </div>
  );
}
