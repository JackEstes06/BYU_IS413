export interface Entertainer {
  entertainerId: number;
  entStageName: string;
  entSSN: string;
  entStreetAddress: string;
  entCity: string;
  entState: string;
  entZipCode: string;
  entPhoneNumber: string;

  entWebPage: string | null;
  entEMailAddress: string | null;

  dateEntered: string;

  timesBooked: number;
  lastBookingDate: string | null;
}
