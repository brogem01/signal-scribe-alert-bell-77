
import React from 'react';
import { useSignalTracker } from '@/hooks/useSignalTracker';
import SignalInput from '@/components/SignalInput';
import ControlPanel from '@/components/ControlPanel';
import SaveTsDialog from '@/components/SaveTsDialog';

const Index = () => {
  const {
    signalsText,
    setSignalsText,
    saveButtonPressed,
    saveTsButtonPressed,
    showAntidelayDialog,
    antidelayInput,
    setAntidelayInput,
    antidelaySeconds,
    showSaveTsDialog,
    saveTsAntidelayInput,
    setSaveTsAntidelayInput,
    handleSaveSignals,
    handleSaveTsMouseDown,
    handleSaveTsMouseUp,
    handleSaveTsMouseLeave,
    handleSaveTsSubmit,
    handleSaveTsCancel,
    handleAntidelaySubmit,
    handleAntidelayCancel,
    handleUndo,
    handleRedo,
    canUndo,
    canRedo,
    handleClear,
    handleRingOff,
    handleScreenOff,
  } = useSignalTracker();

  return (
    <div className="bg-background flex flex-col select-none overflow-hidden" style={{ 
      userSelect: 'none', 
      WebkitUserSelect: 'none',
      height: '100dvh', // Dynamic viewport height for mobile
      paddingBottom: 'env(safe-area-inset-bottom)' // Safe area for mobile
    }}>
      <div className="flex-1 overflow-hidden">
        <SignalInput
          signalsText={signalsText}
          onSignalsTextChange={setSignalsText}
          onUndo={handleUndo}
          onRedo={handleRedo}
          canUndo={canUndo}
          canRedo={canRedo}
          onClear={handleClear}
        />
      </div>
      
      <div className="flex-shrink-0 pb-2">
        <ControlPanel
          signalsText={signalsText}
          saveButtonPressed={saveButtonPressed}
          saveTsButtonPressed={saveTsButtonPressed}
          onSaveSignals={handleSaveSignals}
          onSaveTsMouseDown={handleSaveTsMouseDown}
          onSaveTsMouseUp={handleSaveTsMouseUp}
          onSaveTsMouseLeave={handleSaveTsMouseLeave}
          onRingOff={handleRingOff}
          onScreenOff={handleScreenOff}
        />
      </div>

      <SaveTsDialog
        open={showSaveTsDialog}
        antidelayValue={saveTsAntidelayInput}
        onAntidelayChange={setSaveTsAntidelayInput}
        onSave={handleSaveTsSubmit}
        onCancel={handleSaveTsCancel}
      />
    </div>
  );
};

export default Index;
