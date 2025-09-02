import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, within, expect } from "@storybook/test";
import { Calendar } from ".";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    view: {
      control: { type: "select" },
      options: ["month", "year", "decade"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    showNavigation: {
      control: { type: "boolean" },
    },
    showDayLabels: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    showOutsideDates: {
      control: { type: "boolean" },
    },
    connected: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    date: new Date(2022, 0, 1), // January 2022
    view: "month",
    size: "md",
    showNavigation: true,
    showDayLabels: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Extra Small:</h4>
        <Calendar size="xs" date={new Date(2022, 0, 1)} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Small:</h4>
        <Calendar size="sm" date={new Date(2022, 0, 1)} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Medium:</h4>
        <Calendar size="md" date={new Date(2022, 0, 1)} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Large:</h4>
        <Calendar size="lg" date={new Date(2022, 0, 1)} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>Extra Large:</h4>
        <Calendar size="xl" date={new Date(2022, 0, 1)} />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Calendar
          date={new Date(2022, 0, 1)}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />
        <div style={{ fontSize: "14px", color: "#666" }}>
          Selected date: {selectedDate ? selectedDate.toDateString() : "None"}
        </div>
      </div>
    );
  },
};

export const RangeSelection: Story = {
  render: function RangeSelectionStory() {
    const [rangeStart, setRangeStart] = useState<Date | undefined>(undefined);
    const [rangeEnd, setRangeEnd] = useState<Date | undefined>(undefined);

    const handleDateSelect = (date: Date) => {
      if (!rangeStart || (rangeStart && rangeEnd)) {
        setRangeStart(date);
        setRangeEnd(undefined);
      } else {
        if (date >= rangeStart) {
          setRangeEnd(date);
        } else {
          setRangeStart(date);
          setRangeEnd(rangeStart);
        }
      }
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Calendar
          date={new Date(2022, 0, 1)}
          rangeStart={rangeStart}
          rangeEnd={rangeEnd}
          onDateSelect={handleDateSelect}
        />
        <div style={{ fontSize: "14px", color: "#666" }}>
          Range: {rangeStart ? rangeStart.toDateString() : "None"} -{" "}
          {rangeEnd ? rangeEnd.toDateString() : "None"}
        </div>
      </div>
    );
  },
};

export const WithoutNavigation: Story = {
  args: {
    date: new Date(2022, 0, 1),
    showNavigation: false,
  },
};

export const WithoutDayLabels: Story = {
  args: {
    date: new Date(2022, 0, 1),
    showDayLabels: false,
  },
};

export const Disabled: Story = {
  args: {
    date: new Date(2022, 0, 1),
    disabled: true,
  },
};

export const CustomDayLabels: Story = {
  args: {
    date: new Date(2022, 0, 1),
    dayLabels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },
};

export const CurrentMonth: Story = {
  render: function CurrentMonthStory() {
    const [currentDate, setCurrentDate] = useState(new Date());

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Calendar date={currentDate} onMonthChange={setCurrentDate} />
        <div style={{ fontSize: "14px", color: "#666" }}>
          Current month:{" "}
          {currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric",
          })}
        </div>
      </div>
    );
  },
};

export const MultipleCalendars: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
      <Calendar size="sm" date={new Date(2022, 0, 1)} showNavigation={false} />
      <Calendar size="sm" date={new Date(2022, 1, 1)} showNavigation={false} />
      <Calendar size="sm" date={new Date(2022, 2, 1)} showNavigation={false} />
    </div>
  ),
};

export const DifferentMonths: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h4 style={{ marginBottom: "12px" }}>January 2022:</h4>
        <Calendar date={new Date(2022, 0, 1)} showNavigation={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>February 2022:</h4>
        <Calendar date={new Date(2022, 1, 1)} showNavigation={false} />
      </div>
      <div>
        <h4 style={{ marginBottom: "12px" }}>March 2022:</h4>
        <Calendar date={new Date(2022, 2, 1)} showNavigation={false} />
      </div>
    </div>
  ),
};

export const WithTodayIndicator: Story = {
  render: function WithTodayIndicatorStory() {
    const today = new Date();
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <Calendar
          date={today}
          view="month"
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />
        <div style={{ fontSize: "14px", color: "#666" }}>
          Today: {today.toDateString()}
          {selectedDate && (
            <span style={{ marginLeft: "16px" }}>
              Selected: {selectedDate.toDateString()}
            </span>
          )}
        </div>
      </div>
    );
  },
};

export const AllViews: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h3 style={{ marginBottom: "16px", textAlign: "center" }}>
          Calendar Views
        </h3>
        <div
          style={{
            display: "flex",
            gap: "24px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <h4 style={{ marginBottom: "12px" }}>Month View</h4>
            <Calendar
              date={new Date(2022, 0, 1)}
              view="month"
              showNavigation={false}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ marginBottom: "12px" }}>Year View (Months)</h4>
            <Calendar
              date={new Date(2022, 0, 1)}
              view="year"
              showNavigation={false}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <h4 style={{ marginBottom: "12px" }}>Decade View (Years)</h4>
            <Calendar
              date={new Date(2022, 0, 1)}
              view="decade"
              showNavigation={false}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

export const InteractiveViews: Story = {
  render: function InteractiveViewsStory() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );
    const [selectedYear, setSelectedYear] = useState<number | undefined>(
      undefined
    );




    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        <div>
          <h3 style={{ marginBottom: "16px", textAlign: "center" }}>
            Interactive Calendar Views
          </h3>
          <div
            style={{
              display: "flex",
              gap: "24px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h4 style={{ marginBottom: "12px" }}>Month View</h4>
              <Calendar
                date={new Date(2022, 0, 1)}
                view="month"
                selectedDate={selectedDate}
                onDateSelect={setSelectedDate}
                showNavigation={false}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}
              >
                Selected: {selectedDate ? selectedDate.toDateString() : "None"}
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ marginBottom: "12px" }}>Year View (Months)</h4>
              <Calendar
                date={new Date(2022, 0, 1)}
                view="year"
                showNavigation={false}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}
              >
                Click a month to select it
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ marginBottom: "12px" }}>Decade View (Years)</h4>
              <Calendar
                date={new Date(2022, 0, 1)}
                view="decade"
                selectedYear={selectedYear}
                onYearSelect={setSelectedYear}
                showNavigation={false}
              />
              <div
                style={{ fontSize: "12px", color: "#666", marginTop: "8px" }}
              >
                Selected: {selectedYear || "None"}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
};

export const ViewSwitching: Story = {
  render: function ViewSwitchingStory() {
    const [currentView, setCurrentView] = useState<"month" | "year" | "decade">(
      "month"
    );
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );
    const [selectedYear, setSelectedYear] = useState<number | undefined>(
      undefined
    );




    const handleViewChange = (view: "month" | "year" | "decade") => {
      setCurrentView(view);
      // console.log(`View changed to: ${view}`);
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "16px" }}>
          <h3 style={{ margin: "0 0 8px 0", color: "#333" }}>
            Manual View Switching
          </h3>
          <p style={{ margin: "0", color: "#666", fontSize: "14px" }}>
            Use buttons below or enable connected navigation to switch views
            seamlessly
          </p>
        </div>

        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <button
            onClick={() => setCurrentView("month")}
            style={{
              padding: "8px 16px",
              background: currentView === "month" ? "#007bff" : "#f8f9fa",
              color: currentView === "month" ? "white" : "black",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Month
          </button>
          <button
            onClick={() => setCurrentView("year")}
            style={{
              padding: "8px 16px",
              background: currentView === "year" ? "#007bff" : "#f8f9fa",
              color: currentView === "year" ? "white" : "black",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Year
          </button>
          <button
            onClick={() => setCurrentView("decade")}
            style={{
              padding: "8px 16px",
              background: currentView === "decade" ? "#007bff" : "#f8f9fa",
              color: currentView === "year" ? "white" : "black",
              border: "1px solid #dee2e6",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Decade
          </button>
        </div>

        <div
          style={{
            border: "1px solid #dee2e6",
            borderRadius: "8px",
            padding: "16px",
            backgroundColor: "#f8f9fa",
          }}
        >
          <Calendar
            date={new Date(2022, 0, 1)}
            view={currentView}
            connected={true}
            selectedDate={currentView === "month" ? selectedDate : undefined}
            selectedYear={
              currentView === "year" || currentView === "decade"
                ? selectedYear
                : undefined
            }
            onViewChange={handleViewChange}
            onDateSelect={currentView === "month" ? setSelectedDate : undefined}
            onYearSelect={
              currentView === "year" || currentView === "decade"
                ? setSelectedYear
                : undefined
            }
            showNavigation={true}
            showDayLabels={true}
          />
        </div>

        <div style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          <strong>Current View:</strong> {currentView}
          {currentView === "month" && selectedDate && (
            <span style={{ marginLeft: "16px" }}>
              <strong>Selected:</strong> {selectedDate.toDateString()}
            </span>
          )}
          {currentView === "year" && selectedYear && (
            <span style={{ marginLeft: "16px" }}>
              <strong>Selected:</strong> {selectedYear}
            </span>
          )}
          {currentView === "decade" && selectedYear && (
            <span style={{ marginLeft: "16px" }}>
              <strong>Selected:</strong> {selectedYear}
            </span>
          )}
        </div>

        <div
          style={{
            padding: "12px",
            backgroundColor: "#e7f3ff",
            borderRadius: "6px",
            border: "1px solid #b3d9ff",
            fontSize: "13px",
          }}
        >
          <strong>💡 Tip:</strong> With <code>connected={true}</code>, you can
          also click the header title to navigate between views!
        </div>
      </div>
    );
  },
};

export const ConnectedNavigation: Story = {
  render: function ConnectedNavigationStory() {
    const [currentView, setCurrentView] = useState<"month" | "year" | "decade">(
      "month"
    );
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );
    const [selectedYear, setSelectedYear] = useState<number | undefined>(
      undefined
    );




    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Connected Navigation</h4>
          <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
            Click header titles to navigate between views. Click years/decades
            to drill down.
          </p>
        </div>

        <Calendar
          date={new Date(2022, 0, 1)}
          view={currentView}
          connected={true}
          selectedDate={currentView === "month" ? selectedDate : undefined}
          selectedYear={
            currentView === "year" || currentView === "decade"
              ? selectedYear
              : undefined
          }
          onDateSelect={currentView === "month" ? setSelectedDate : undefined}
          onYearSelect={
            currentView === "year" || currentView === "decade"
              ? setSelectedYear
              : undefined
          }
          onViewChange={setCurrentView}
          showNavigation={false}
        />

        <div style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          Current View: {currentView}
          {currentView === "month" && selectedDate && (
            <span style={{ marginLeft: "16px" }}>
              Selected: {selectedDate.toDateString()}
            </span>
          )}
          {currentView === "year" && selectedYear && (
            <span style={{ marginLeft: "16px" }}>Selected: {selectedYear}</span>
          )}
          {currentView === "decade" && selectedYear && (
            <span style={{ marginLeft: "16px" }}>Selected: {selectedYear}</span>
          )}
        </div>
      </div>
    );
  },
};

export const WithIndicators: Story = {
  render: function WithIndicatorsStory() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );

    // Custom indicator function - show indicators for weekends and today
    const getDateIndicator = (date: Date) => {
      const today = new Date();
      const isToday = date.toDateString() === today.toDateString();
      const isWeekend = date.getDay() === 0 || date.getDay() === 6; // Sunday or Saturday

      return isToday || isWeekend;
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Calendar with Indicators</h4>
          <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
            Red dots show on today and weekend dates
          </p>
        </div>

        <Calendar
          date={new Date(2024, 0, 15)} // January 2024
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          showIndicators={true}
          getDateIndicator={getDateIndicator}
        />

        <div style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          Selected date: {selectedDate ? selectedDate.toDateString() : "None"}
        </div>
      </div>
    );
  },
};

export const CustomIndicators: Story = {
  render: function CustomIndicatorsStory() {
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );

    // Custom indicator function - show indicators for specific dates
    const getDateIndicator = (date: Date) => {
      // Show indicators for dates that are multiples of 5
      return date.getDate() % 5 === 0;
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: "8px" }}>
          <h4 style={{ margin: "0 0 8px 0" }}>Custom Indicators</h4>
          <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
            Red dots show on dates that are multiples of 5
          </p>
        </div>

        <Calendar
          date={new Date(2024, 0, 15)} // January 2024
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
          showIndicators={true}
          getDateIndicator={getDateIndicator}
        />

        <div style={{ fontSize: "14px", color: "#666", textAlign: "center" }}>
          Selected date: {selectedDate ? selectedDate.toDateString() : "None"}
        </div>
      </div>
    );
  },
};

export const FullyConnectedNavigation: Story = {
  render: function FullyConnectedNavigationStory() {
    const [currentView, setCurrentView] = useState<"month" | "year" | "decade">(
      "month"
    );
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );
    const [selectedYear, setSelectedYear] = useState<number | undefined>(
      undefined
    );

    const handleViewChange = (view: "month" | "year" | "decade") => {
      setCurrentView(view);
      // console.log(`View changed to: ${view}`);
    };

    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
      // console.log(`Date selected: ${date.toDateString()}`);
    };

    const handleYearSelect = (year: number) => {
      setSelectedYear(year);
      // console.log(`Year selected: ${year}`);
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ marginBottom: "16px", color: "#333" }}>
            Fully Connected Calendar Navigation
          </h2>
          <p style={{ color: "#666", marginBottom: "24px" }}>
            All three view variants are now seamlessly connected. Click the
            header title to navigate between views, or use the navigation arrows
            to move through time within each view.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              marginBottom: "16px",
              padding: "12px",
              backgroundColor: "#f8f9fa",
              borderRadius: "8px",
            }}
          >
            <div
              style={{
                padding: "8px 16px",
                background: currentView === "month" ? "#007bff" : "#e9ecef",
                color: currentView === "month" ? "white" : "#495057",
                borderRadius: "6px",
                fontWeight: currentView === "month" ? "600" : "400",
              }}
            >
              Month View
            </div>
            <div
              style={{
                padding: "8px 16px",
                background: currentView === "year" ? "#007bff" : "#e9ecef",
                color: currentView === "year" ? "white" : "#495057",
                borderRadius: "6px",
                fontWeight: currentView === "year" ? "600" : "400",
              }}
            >
              Year View
            </div>
            <div
              style={{
                padding: "8px 16px",
                background: currentView === "decade" ? "#007bff" : "#e9ecef",
                color: currentView === "decade" ? "white" : "#495057",
                borderRadius: "6px",
                fontWeight: currentView === "decade" ? "600" : "400",
              }}
            >
              Decade View
            </div>
          </div>
        </div>

        <div
          style={{
            border: "2px solid #007bff",
            borderRadius: "12px",
            padding: "20px",
            backgroundColor: "#f8f9ff",
          }}
        >
          <Calendar
            date={new Date(2024, 0, 1)}
            view={currentView}
            connected={true}
            showNavigation={true}
            showDayLabels={true}
            selectedDate={currentView === "month" ? selectedDate : undefined}
            selectedYear={
              currentView === "year" || currentView === "decade"
                ? selectedYear
                : undefined
            }
            onViewChange={handleViewChange}
            onDateSelect={
              currentView === "month" ? handleDateSelect : undefined
            }
            onYearSelect={
              currentView === "year" || currentView === "decade"
                ? handleYearSelect
                : undefined
            }
            size="lg"
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "20px",
            backgroundColor: "#f8f9fa",
            borderRadius: "8px",
          }}
        >
          <h3 style={{ margin: "0", color: "#333" }}>
            Navigation Instructions:
          </h3>

          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div style={{ flex: "1", minWidth: "200px" }}>
              <h4 style={{ margin: "0 0 8px 0", color: "#007bff" }}>
                🔍 Click Header Title
              </h4>
              <ul style={{ margin: "0", paddingLeft: "20px", color: "#666" }}>
                <li>
                  <strong>Month → Year:</strong> Click month/year title
                </li>
                <li>
                  <strong>Year → Decade:</strong> Click year title
                </li>
                <li>
                  <strong>Decade → Month:</strong> Click decade range title
                </li>
              </ul>
            </div>

            <div style={{ flex: "1", minWidth: "200px" }}>
              <h4 style={{ margin: "0 0 8px 0", color: "#007bff" }}>
                ⬅️➡️ Navigation Arrows
              </h4>
              <ul style={{ margin: "0", paddingLeft: "20px", color: "#666" }}>
                <li>
                  <strong>Month:</strong> Previous/Next month
                </li>
                <li>
                  <strong>Year:</strong> Previous/Next year
                </li>
                <li>
                  <strong>Decade:</strong> Previous/Next decade
                </li>
              </ul>
            </div>

            <div style={{ flex: "1", minWidth: "200px" }}>
              <h4 style={{ margin: "0 0 8px 0", color: "#007bff" }}>
                🖱️ Click Elements
              </h4>
              <ul style={{ margin: "0", paddingLeft: "20px", color: "#666" }}>
                <li>
                  <strong>Month View:</strong> Click dates to select
                </li>
                <li>
                  <strong>Year View:</strong> Click months to go to month view
                </li>
                <li>
                  <strong>Decade View:</strong> Click years to go to year view
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          style={{
            padding: "16px",
            backgroundColor: "#e7f3ff",
            borderRadius: "8px",
            border: "1px solid #b3d9ff",
          }}
        >
          <h4 style={{ margin: "0 0 12px 0", color: "#0056b3" }}>
            Current Status:
          </h4>
          <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
            <div>
              <strong>Current View:</strong>{" "}
              <span style={{ color: "#007bff" }}>{currentView}</span>
            </div>
            {currentView === "month" && selectedDate && (
              <div>
                <strong>Selected Date:</strong>{" "}
                <span style={{ color: "#28a745" }}>
                  {selectedDate.toDateString()}
                </span>
              </div>
            )}
            {(currentView === "year" || currentView === "decade") &&
              selectedYear && (
                <div>
                  <strong>Selected Year:</strong>{" "}
                  <span style={{ color: "#28a745" }}>{selectedYear}</span>
                </div>
              )}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the fully connected navigation between all three calendar view variants. Users can seamlessly navigate between month, year, and decade views by clicking the header title, using navigation arrows, or clicking on selectable elements within each view.",
      },
    },
  },
};

export const ConnectedCalendarExample: Story = {
  render: function ConnectedCalendarExampleStory() {
    const [currentView, setCurrentView] = useState<"month" | "year" | "decade">(
      "month"
    );
    const [selectedDate, setSelectedDate] = useState<Date | undefined>(
      undefined
    );
    const [selectedYear, setSelectedYear] = useState<number | undefined>(
      undefined
    );
    const [selectedMonth, setSelectedMonth] = useState<number | undefined>(
      undefined
    );

    const handleViewChange = (view: "month" | "year" | "decade") => {
      setCurrentView(view);
      // console.log(`Calendar view changed to: ${view}`);
    };

    const handleDateSelect = (date: Date) => {
      setSelectedDate(date);
      // console.log(`Date selected: ${date.toDateString()}`);
    };

    const handleYearSelect = (year: number) => {
      setSelectedYear(year);
      // console.log(`Year selected: ${year}`);
    };

    const handleMonthSelect = (date: Date) => {
      setSelectedMonth(date.getMonth());
      // console.log(
//         `Month selected: ${date.getMonth() + 1} (${date.toDateString()})`
//       );
    };

    const resetSelection = () => {
      setSelectedDate(undefined);
      setSelectedYear(undefined);
      setSelectedMonth(undefined);
    };

    return (
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <h2 style={{ marginBottom: "16px", color: "#333" }}>
            Connected Calendar Implementation
          </h2>
          <p style={{ color: "#666", marginBottom: "24px" }}>
            This example shows how to implement a fully connected calendar with
            proper state management and seamless navigation between all three
            view variants.
          </p>

          <button
            onClick={resetSelection}
            style={{
              padding: "10px 20px",
              backgroundColor: "#6c757d",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Reset All Selections
          </button>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {/* Calendar Component */}
          <div
            style={{
              border: "2px solid #007bff",
              borderRadius: "12px",
              padding: "20px",
              backgroundColor: "#f8f9ff",
            }}
          >
            <Calendar
              date={new Date(2024, 0, 1)}
              view={currentView}
              connected={true}
              showNavigation={true}
              showDayLabels={true}
              selectedDate={currentView === "month" ? selectedDate : undefined}
              selectedYear={
                currentView === "year" || currentView === "decade"
                  ? selectedYear
                  : undefined
              }
              onViewChange={handleViewChange}
              onDateSelect={
                currentView === "month" ? handleDateSelect : undefined
              }
              onYearSelect={
                currentView === "year" || currentView === "decade"
                  ? handleYearSelect
                  : undefined
              }
              onMonthChange={handleMonthSelect}
              size="lg"
            />
          </div>

          {/* Control Panel */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* View Status */}
            <div
              style={{
                padding: "16px",
                backgroundColor: "#e7f3ff",
                borderRadius: "8px",
                border: "1px solid #b3d9ff",
              }}
            >
              <h4 style={{ margin: "0 0 12px 0", color: "#0056b3" }}>
                Current View
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  flexWrap: "wrap",
                }}
              >
                {["month", "year", "decade"].map((view) => (
                  <div
                    key={view}
                    style={{
                      padding: "6px 12px",
                      background: currentView === view ? "#007bff" : "#e9ecef",
                      color: currentView === view ? "white" : "#495057",
                      borderRadius: "4px",
                      fontSize: "12px",
                      fontWeight: currentView === view ? "600" : "400",
                    }}
                  >
                    {view.charAt(0).toUpperCase() + view.slice(1)}
                  </div>
                ))}
              </div>
            </div>

            {/* Selections */}
            <div
              style={{
                padding: "16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "1px solid #dee2e6",
              }}
            >
              <h4 style={{ margin: "0 0 12px 0", color: "#495057" }}>
                Current Selections
              </h4>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                {currentView === "month" && selectedDate && (
                  <div style={{ fontSize: "14px" }}>
                    <strong>Date:</strong>{" "}
                    <span style={{ color: "#28a745" }}>
                      {selectedDate.toDateString()}
                    </span>
                  </div>
                )}
                {selectedYear && (
                  <div style={{ fontSize: "14px" }}>
                    <strong>Year:</strong>{" "}
                    <span style={{ color: "#28a745" }}>{selectedYear}</span>
                  </div>
                )}
                {selectedMonth !== undefined && (
                  <div style={{ fontSize: "14px" }}>
                    <strong>Month:</strong>{" "}
                    <span style={{ color: "#28a745" }}>
                      {selectedMonth + 1}
                    </span>
                  </div>
                )}
                {!selectedDate &&
                  !selectedYear &&
                  selectedMonth === undefined && (
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#6c757d",
                        fontStyle: "italic",
                      }}
                    >
                      No selections yet
                    </div>
                  )}
              </div>
            </div>

            {/* Navigation Instructions */}
            <div
              style={{
                padding: "16px",
                backgroundColor: "#fff3cd",
                borderRadius: "8px",
                border: "1px solid #ffeaa7",
              }}
            >
              <h4 style={{ margin: "0 0 12px 0", color: "#856404" }}>
                Navigation Guide
              </h4>
              <div style={{ fontSize: "13px", color: "#856404" }}>
                <div style={{ marginBottom: "8px" }}>
                  <strong>🔍 Header Click:</strong> Navigate between views
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <strong>⬅️➡️ Arrows:</strong> Navigate within current view
                </div>
                <div style={{ marginBottom: "8px" }}>
                  <strong>🖱️ Click Elements:</strong> Select dates/months/years
                </div>
                <div>
                  <strong>🔄 Connected:</strong> Seamless view transitions
                </div>
              </div>
            </div>

            {/* Console Output */}
            <div
              style={{
                padding: "16px",
                backgroundColor: "#f8f9fa",
                borderRadius: "8px",
                border: "1px solid #dee2e6",
              }}
            >
              <h4 style={{ margin: "0 0 12px 0", color: "#495057" }}>
                Console Events
              </h4>
              <div
                style={{
                  fontSize: "12px",
                  color: "#6c757d",
                  fontFamily: "monospace",
                  backgroundColor: "#fff",
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #dee2e6",
                  minHeight: "60px",
                }}
              >
                Check browser console for navigation and selection events
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "A practical implementation example showing how to use the fully connected calendar with proper state management, event handling, and a comprehensive control panel for monitoring the calendar's state and user interactions.",
      },
    },
  },
};
